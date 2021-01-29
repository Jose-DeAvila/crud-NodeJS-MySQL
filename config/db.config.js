"use strict";

const mysql = require("mysql");

const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "26930470",
  database: "node_mysql_crud_db",
});

dbConn.connect((err) => {
  if (err) throw err;
  console.log("Database connected!");
});

module.exports = dbConn;
