import * as express from 'express';
// import { Request, Response } from "express";
import getUrl from "./encode-url";

const app = express();

app.get('/', (request, response) => {
  response.send('Hello world! - version 1.1');
});

app.get("/test", async (req, res) => {
  console.log("req", req);
  res.send(JSON.stringify(req));
});

app.get("/getUrl", async (req, res) => {
  console.log("******getUrl call getting initiated*******");
  const url = await getUrl();
  res.send(url);
});

app.listen(5000);