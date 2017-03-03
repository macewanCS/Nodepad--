var express = require('express');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var passport = require('passport');

require("../config/passport")(passport);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/../public/views');
app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
} )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
var routes =require("./routes.js")(app, passport);

app.use(express.static(__dirname + '/../public'));


module.exports = app;