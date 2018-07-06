// TODO: not ez: кнопки да/нет
//       new: впишите, что на картинке; выберите из приведенного; sortable;

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const path = require('path');

const port = process.env.PORT || 3000;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static(`${__dirname}/src`));

app.get('/game', (req, res) => {
  res.sendFile(path.join(`${__dirname}/src/views/index.html`));
});

app.get('/test', (req, res) => {
  // delete after tortures
  res.sendFile(path.join(`${__dirname}/src/scripts/test/test.html`));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/src/views/about.html`));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
