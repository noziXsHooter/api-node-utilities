const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const server = express();

server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(bodyParser.json());
server.use('/', routes);


server.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = server;