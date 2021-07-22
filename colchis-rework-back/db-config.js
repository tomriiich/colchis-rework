const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  charset: 'utf8mb4',
});

db.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
  } else {
    console.log(`connected to database with threadId : ${db.threadId}`);
  }
});

module.exports = db;
