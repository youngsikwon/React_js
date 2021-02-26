const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = process.env.port || 3000;

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'simpleboard',
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/insert', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const sqlQuery = "INSERT INTO simpleboard (title, content) VALUES ('?', '?)";
  b.query(sqlQuery, [title, content], (err, result) => {
    res.send('success!');
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
