const express = require("express");
require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT;

// const urlDB = `mysql://root:h6BfgD4DF5F54Fahce1-dHeHGhf-BfFH@monorail.proxy.rlwy.net:16257/railway`;

const connection = mysql.createConnection({
  database: process.env.MYSQLDATABASE,
  host: process.env.MYSQLHOST,
  password: process.env.MYSQLPASSWORD,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
});

connection.connect((err) => {
  if (err) {
    console.log("Error happened " + err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

// app.post("/submit", (req, res) => {
//   const name = req.body.name;
//   res.send(`Hello, ${name}!`);
// });

app.post("/submit", (req, res) => {
  const name = req.body.name;

  connection.query(
    "INSERT INTO users (name) VALUES (?)",
    [name],
    (error, results) => {
      if (error) {
        console.error("Error inserting data into MySQL: " + errror);
        res.send("Error submitting data. Please try again.");
      } else {
        console.log("Data inserted into MySQL successfully.");
        res.send(`Hello, ${name}! Your data has been submitted.`);
      }
    }
  );
});

app.listen(port, (error) => {
  if (!error) console.log("Server is Running on Port " + port);
  else console.log("Error occurred, server can't start", error);
});
