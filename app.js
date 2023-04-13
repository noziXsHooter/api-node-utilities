const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(bodyParser.json());
app.use('/', routes);


app.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = app;