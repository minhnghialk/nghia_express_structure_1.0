// Kích hoạt env
import dotenv from "dotenv";
dotenv.config();

// Tạo ra server
import express from "express";
const server = express();

server.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Server đã chạy tại: ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`
  );
});
