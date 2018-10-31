import express from 'express';
<<<<<<< HEAD
// import albumRouter from './routes/albums.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use(albumRouter);
=======
import api from './api/api.js';
const app = express();
let isRunning = false;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(api);
>>>>>>> 572708ad0f3486d0e905710dfc76437a143113d1

module.exports = {
  app,
  start: (port) => {
<<<<<<< HEAD
    app.listen(port, () => console.log('Running on', port));
  }
}
=======
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
>>>>>>> 572708ad0f3486d0e905710dfc76437a143113d1
