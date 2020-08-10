var express = require("express");
var app = express();

app.set("views engine", "ejs");

app.get("/", function(req, res) {
    res.render("home.ejs");
});
app.get("/game", function(req, res) {
    res.render("colourgame.ejs")
});
var port = process.env.port || 80;

app.listen(port, function() {
    console.log("server started");
});