require('dotenv').config();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "burgers_db",
});

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;
