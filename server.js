var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Sets up Express.js App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Data
// ===========================================================
var yoda = {
  name: "Yoda",
  phone: 123-456-7890,
  email: "gmail@yoda.com",
  uniqueID: 1
};

var jabba = {
  name: "Jabba",
  phone: 234-567-8901,
  email: "jabba@thehut.com",
  uniqueID: 2
};

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});