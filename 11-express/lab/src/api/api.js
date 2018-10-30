import express from 'express';
import Atty from '../models/atty.js';
const app = express();
const router = new express.Router();

let sendJSON = (res, data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  console.log(JSON.stringify(data));
  res.write(JSON.stringify(data));
  res.end();
};

router.get('/api/v1/attorneys', (req, res) => {
  Atty.getAll().then(
    data => sendJSON(res, data))
    .catch(err => {
      res.statusCode = 404;
      res.statusMessage = 'Not Found';
      res.write(JSON.stringify(err));
      res.end();
    });
});

router.get('/api/v1/attorneys/:id', (req,res) => {
  Atty.getOne(req.params.id)
  .then(data => { sendJSON(res, data) })
  .catch(err => {
    res.statusCode = 404;
    res.statusMessage = 'Not Found';
    res.write(JSON.stringify(err));
    res.end();
  });
});

router.post('/api/v1/attorneys', (req, res) => {
  console.log(req.body);
  let atty = new Atty(req.body);
  atty.save()
    .then(data => sendJSON(res, data))
    .catch(console.error);
});

router.delete('/api/v1/attorneys/:id', (req, res) => {
  Atty.deleteOne(req.params.id)
    .then(success => {
      res.statusCode = 204;
      res.statusMessage = 'OK';
      res.end();
    })
    .catch(console.error);
});

router.put('/api/v1/attorneys/:id', (req,res) => {
  Atty.updateOne(req.params.id, req.body)
  .then(data => {
    sendJSON(res,data)
  })
  .catch(err => {
    res.statusCode = 404;
    res.statusMessage = 'Not Found';
    res.write(JSON.stringify(err));
    res.end();
  });
});

export default router;