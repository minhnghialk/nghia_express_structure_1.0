// Kích hoạt env
import dotenv from "dotenv";
dotenv.config();

// Tạo ra server
import express from "express";
const server = express();

// Connect MySQL
import { mysqlConnect } from "./databases/mySQL";
mysqlConnect();

// Body Parser
import bodyParser from "body-parser";
server.use(bodyParser.json());

// Setup Views
import viewConfig from "./views";
server.use("/views", viewConfig);

// Setup Api
import apiConfig from "./routes";
server.use("/apis", apiConfig);

server.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Server đã chạy tại: ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`
  );
});
