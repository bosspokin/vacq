const mysql = require("mysql2");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "IAmNewToLinux1@8259",
  database: "vacCenter",
});

module.exports = connection;
