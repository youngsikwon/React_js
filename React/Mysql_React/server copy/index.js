const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = process.env.port || 3000;

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: ""
});
app.listen(PORT, () => {
  console.log('running on port{PORT}');
});
