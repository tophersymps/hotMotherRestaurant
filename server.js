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
var tables = [
  {
    name: "Yoda",
    phone: 123-456-7890,
    email: "gmail@yoda.com",
    uniqueID: 1
  },
  {
    name: "Jabba",
    phone: 234-567-8901,
    email: "jabba@thehut.com",
    uniqueID: 2
  }
];

var waitlist = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


// Displays all current tables [table array]
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

// Displays waitlist
app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});


//Create new reservation/waitlist object
app.post("/api/tables", function(req, res) {
  if (tables.length < 5) {
    tables.push(req.body);
    res.json(true);
  }
  else {
    waitlist.push(req.body);
    res.json(false);
  }
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});