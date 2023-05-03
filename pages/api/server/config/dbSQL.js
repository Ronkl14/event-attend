const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.SQL_PASS,
  database: "attender",
});

module.exports = db;
