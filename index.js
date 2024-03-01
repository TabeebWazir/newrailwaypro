const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello World");
});

app.listen(port, (error) => {
  if (!error) console.log("Server is Running on Port " + port);
  else console.log("Error occurred, server can't start", error);
});
