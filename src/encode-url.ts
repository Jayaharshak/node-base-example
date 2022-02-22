// import { AthenaExpress } from "athena-express";
// import * as AWS from "aws-sdk";
const AthenaExpress = require("athena-express");
var AWS = require("aws-sdk");
// const AthenaExpress = require("athena-express"),
// AWS = require("aws-sdk"),
const awsCredentials = {
    region: "us-east-1",
};

AWS.config.update(awsCredentials);

const athenaExpressConfig = {
    aws: AWS,
    s3: "s3://ahtena-query-results/",
    getStats: true
};

const athenaExpress = new AthenaExpress(athenaExpressConfig);

//Invoking a query on Amazon Athena
const getUrl = (async () => {
    let myQuery = {
        sql: `SELECT * FROM tb_first_stream WHERE firstcode in ('5d8860652182cc411d5b0335');`,
        db: "firststream",
        pagination: 10
    };

    try {
        let results = await athenaExpress.query(myQuery);
        console.log(results);
        return results;
    } catch (error) {
        console.log(error);
        return (JSON.stringify(error));
    }
});

export default getUrl;