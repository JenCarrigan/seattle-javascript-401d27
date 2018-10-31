require('dotenv').config();

//TODO turn into ES6
require('babel-register');

require('./src/app.js').start(process.env.PORT);