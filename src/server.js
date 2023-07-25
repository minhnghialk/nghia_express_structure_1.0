// Kích hoạt env
import dotenv from "dotenv";
dotenv.config();

// Tạo ra server
import express from "express";
const server = express();

// Connect MySQL
// import mySQL from "./databases/mySQL";
import { mysqlConnect } from "./databases/mySQL";
mysqlConnect();

// connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
//   if (error) throw error;
//   console.log("The solution is: ", results[0].solution);
// });

// connection.end();

server.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Server đã chạy tại: ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`
  );
});
