// import { AthenaExpress } from "athena-express";
// import * as AWS from "aws-sdk";
const AthenaExpress = require("athena-express");
var AWS = require("aws-sdk");
// const AthenaExpress = require("athena-express"),
// AWS = require("aws-sdk"),
const awsCredentials = {};

AWS.config.update(awsCredentials);

const athenaExpressConfig = {
    aws: AWS,
    s3: "s3://harsha-test-athena/",
    getStats: true
};

const athenaExpress = new AthenaExpress(athenaExpressConfig);

//Invoking a query on Amazon Athena
const getUrl = (async () => {
    let myQuery = {
        sql: "SELECT * FROM final_test_harsha limit 10;",
        db: "myfirstdb",
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