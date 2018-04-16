const express = require("express");
const ejs = require("ejs");
// const ejsLayout = require("express-ejs-layouts");

const port = process.env.PORT || 5000;

const app = express();

app.set("view engine", "ejs");

// app.use(ejsLayout);
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log("The server is running.................");
});
