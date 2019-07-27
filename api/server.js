const express = require('express');
const server = express();

const setup = require('../config/setup.js');

setup(server);


module.exports = server;