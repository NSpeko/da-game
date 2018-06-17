const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + `/src`));

app.get('/game', function (req, res) {
  res.sendFile(path.join(__dirname + `/src/views/index.html`));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + `/src/views/about.html`));
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}/`);
});