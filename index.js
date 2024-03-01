// const express = require("express");
// require("dotenv").config();

// const app = express();
// const port = process.env.PORT;

// app.get("/", (req, res) => {
//   res.status(200);
//   res.send("Hello World");
// });

// app.listen(port, (error) => {
//   if (!error) console.log("Server is Running on Port " + port);
//   else console.log("Error occurred, server can't start", error);
// });

// const express = require("express");
// require("dotenv").config();
// const path = require("path"); // Import path module to work with file paths

// const app = express();
// const port = process.env.PORT || 3000; // Use port from environment variable or default to 3000

// // Set the view engine and the views directory
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views")); // Assuming home.ejs is in a "views" directory

// app.get("/", (req, res) => {
//   res.render("home"); // Render the home.ejs file
// });

// app.post("/submit", (req, res) => {
//   const name = req.body.name;
//   res.send(`Hello, ${name}!`);
// });

// app.listen(port, (error) => {
//   if (!error) console.log("Server is Running on Port " + port);
//   else console.log("Error occurred, server can't start", error);
// });

const express = require("express");
require("dotenv").config();
const path = require("path"); // Import path module to work with file paths
const bodyParser = require("body-parser"); // Import body-parser middleware

const app = express();
const port = process.env.PORT; // Use port from environment variable or default to 3000

// Set the view engine and the views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Assuming home.ejs is in a "views" directory

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home"); // Render the home.ejs file
});

app.post("/submit", (req, res) => {
  const name = req.body.name;
  res.send(`Hello, ${name}!`);
});

app.listen(port, (error) => {
  if (!error) console.log("Server is Running on Port " + port);
  else console.log("Error occurred, server can't start", error);
});
