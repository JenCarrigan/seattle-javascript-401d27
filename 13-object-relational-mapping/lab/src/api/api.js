const debug = require('debug')('api');
import express from 'express';
const router = express.Router();
import atty from '../models/attorneys.js';

let sendJSON = (res, data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
};

router.get('/api/v1/attorneys', (req, res, next) => {
  atty.find({})
    .then(data => sendJSON(res, data))
    .catch(next);
});

router.get('/api/v1/attorneys/:id', (req, res, next) => {
  atty.find({_id: req.params.id})
    .then(data => { sendJSON(res, data) })
    .catch(err => {
      next();
    });
});

router.post('/api/v1/attorneys', (req, res, next) => {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.statusCode = 400;
    res.statusMessage = 'Bad Request';
    res.end();
  }
  else{
    console.log('post body is ', req.body);
    atty.create(req.body)
      .then(data => sendJSON(res, data))
      .catch(next);
  }
});

router.delete('/api/v1/attorneys/:id', (req, res, next) => {
  atty.findByIdAndRemove(req.params.id)
    .then(success => {
      res.statusCode = 204;
      res.statusMessage = 'OK';
      res.end();
    })
    .catch(err => {
      next();
    });
});

router.put('/api/v1/attorneys/:id', (req, res, next) => {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.statusCode = 400;
    res.statusMessage = 'Bad Request';
    res.end();
  }
  else {
    atty.replaceOne({_id: req.params.id}, req.body)
    .then(data => {
      console.log('replace one',data);
      sendJSON(res, data)
    })
    .catch(err => {
      console.log('the replace catch', err);
      next();
    });
  }
});

router.patch('/api/v1/attorneys/:id', (req,res,next) => {
  atty.findByIdAndUpdate({_id: req.params.id}, req.body)
  .then(data => {
    sendJSON(res, data)
  })
  .catch(err => {
    next();
  });
});

export default router; 