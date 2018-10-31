const debug = require('debug')('api');
import express from 'express';
const router = express.Router();

import modelFinder from '../middleware/models.js';
router.param('model', modelFinder);

let sendJSON = (res, data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
};

router.get('/api/v1/:model', (req, res, next) => {
  req.model.getAll().then(
    data => sendJSON(res, data))
    .catch(next);
});

router.get('/api/v1/:model/:id', (req, res, next) => {
  req.model.getOne(req.params.id)
    .then(data => { sendJSON(res, data) })
    .catch(err => {
      next();
    });
});
router.post('/api/v1/:model', (req, res, next) => {
  let atty = new req.model(req.body);
  atty.save()
    .then(data => sendJSON(res, data))
    .catch(next);
});
router.delete('/api/v1/:model/:id', (req, res, next) => {
  req.model.deleteOne(req.params.id)
    .then(success => {
      res.statusCode = 204;
      res.statusMessage = 'OK';
      res.end();
    })
    .catch(err => {
      next();
    });
});

router.put('/api/v1/:model/:id', (req, res, next) => {
  req.model.updateOne(req.params.id, req.body)
    .then(data => {
      sendJSON(res, data)
    })
    .catch(err => {
      next();
    });
});

export default router;