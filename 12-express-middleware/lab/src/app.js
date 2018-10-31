const debug = require('debug')('potato');

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import router from './api/api.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';
import badRequest from './middleware/400.js';

let app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);
app.use(errorHandler);
app.use(notFound);
app.use(badRequest);

let isRunning = false;

module.exports = {
  app,
  start: (port) => {
    debug('hello world');
    if (!isRunning) {
      app.listen(port, (err) => {
        if(err) {
          throw err;
        }
        isRunning = true;
        debug('Server up on port', port);
      });
    }
    else {
      //what does this shiz do?
      debug('Server already up!');
    }
  },

  stop: () => {
    app.close(() => {
      isRunning = false;
      console.log('Server stopped!');
    });
  },
};