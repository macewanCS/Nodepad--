var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/../public/views');

var routes =require("./routes.js")(app);

app.use(express.static(__dirname + '/../public'));


module.exports = app;