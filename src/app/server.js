var express = require('express');
var mysql = require('mysql');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/../public/views');

app.use(express.static(__dirname + '/../public'));

app.get('/', function(req, res){
  res.render((__dirname + '/../public/views/login.ejs'));
});

app.get('/home', function(req, res){
  res.render((__dirname + '/../public/views/home.ejs'));
});

app.get('/announcements', function(req, res){
  res.render((__dirname + '/../public/views/announcements.ejs'));
});

app.get('/help', function(req, res){
  res.render((__dirname + '/../public/views/help.ejs'));
});

app.get('/mytickets', function(req, res){
  res.render((__dirname + '/../public/views/mytickets.ejs'));
});

app.get('/branchtickets', function(req, res){
  res.render((__dirname + '/../public/views/branchtickets.ejs'));
});

app.get('/categories', function(req, res){
  res.render((__dirname + '/../public/views/categories.ejs'));
});

app.get('/createticket', function(req, res){
  res.render((__dirname + '/../public/views/createticket.ejs'));
});

app.get('/ticketverification', function(req, res){
  res.render((__dirname + '/../public/views/ticketverification.ejs'));
});

app.get('/ticketconfirm', function(req, res){
  res.render((__dirname + '/../public/views/ticketconfirm.ejs'));
});

app.get('/editticket', function(req, res){
  res.render((__dirname + '/../public/views/editticket.ejs'));
});

app.get('/editconfirm', function(req, res){
  res.render((__dirname + '/../public/views/editconfirm.ejs'));
});

app.get('/resolveticket', function(req, res){
  res.render((__dirname + '/../public/views/resolveticket.ejs'));
});

app.get('/resolveconfirm', function(req, res){
  res.render((__dirname + '/../public/views/resolveconfirm.ejs'));
});


module.exports = app;