import express from 'express';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

import api from './api/api.js';
const app = express();
let isRunning = false;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(api);

module.exports = {
  app,
  start: (port) => {

    app.listen(port, () => console.log('Running on', port));
  }
}

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
      console.log('Server already up.')
    }
  },
  stop: () => {
    app.close(() => {
      isRunning = false;
      console.log('Server stopped.');
    });
  },
};