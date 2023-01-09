// Making a server with express
const express = require("express");

const PORT = process.env.PORT || 3002;

const app = express();

// test message
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

//Database connection
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'devuser',
    password: 'Saint-14-2',
    database: 'E_Commerce_2'
});


conn.connect((err) => {
  // let's me know if it can't connect
    if (err) {
        console.log('somethings not right...');
        console.log(err);
        return;
    }
  //tells me it's connected
    console.log('connected!');
});

// Runs mySQL query
conn.query('SELECT * FROM Products', (err, row) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
      console.log(row);
    }
});

conn.end((err) => {
    console.log(err);
});