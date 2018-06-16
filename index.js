var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require("path");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/dist/'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/about.html'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/about.html'));
});

//app.post('/login', function (req, res) {})

app.listen(3000, function () {
  console.log('Server running at http://localhost:3000/');
});