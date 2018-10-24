'use strict'

//third party lib
const dotenv = require('dotenv').config();

//local lib
const server = require('./src/app.js');

//start server from port in env file
server.start( process.env.PORT, () => console.log(`Server started on ${process.env.PORT}. Ctrl-C to quit.`) );