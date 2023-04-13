const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const server = express();

server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(bodyParser.json());
server.use('/', routes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;