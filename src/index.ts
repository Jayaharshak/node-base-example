import * as express from 'express';
import { Request, Response } from "express";
import getUrl from "./encode-url";

const app = express();

app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.get("/test", async (req: Request, res: Response) => {
  // console.log("req", req);
  res.send(JSON.stringify(req.query));
});

app.get("/getUrl", async (req: Request, res: Response) => {
  // console.log("req", req);
  const url = await getUrl();
  res.send(url);
});

app.listen(5000);