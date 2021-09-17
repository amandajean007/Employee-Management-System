// imports required data to work
const express = require('express');
const mysql = require('mysql2');
const pw = require('../password/.env')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//connects to mySQL
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Leah&Maya104618',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );




// sets port up to be worked on
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  