var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require("path");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/dist'));

app.get('/game', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/views/index.html'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/views/about.html'));
});

app.listen(3000, function () {
  console.log('Server running at http://localhost:3000/');
});