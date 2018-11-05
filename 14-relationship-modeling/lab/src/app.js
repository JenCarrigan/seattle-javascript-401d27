import express from 'express';
import cors from 'cors';

import router from './api/api.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';

let app = express();
let isRunning = false;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(errorHandler);
app.use(notFound);

module.exports = {
  server: app,
  start: (port) => {
    if (!isRunning) {
      app.listen(port, (err) => {
        if (err) {
          throw err;
        }
        isRunning = true;
        console.log('Server up on port', port);
      });
    }
    else {
      console.log('Server already up!');
    }
  },
  stop: () => {
    app.close(() => {
      isRunning = false;
      console.log('Server stopped!');
    });
  },
};