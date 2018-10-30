'use strict'

const router = require('../lib/router.js');
const Note = require('../models/notes.js');

let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  console.log(JSON.stringify(data));
  res.write(JSON.stringify(data));
  res.end();
};

let serverError = (res, err) => {
  let error = {error : err};
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
}

router.get( '/api/v1/notes', (req,res) => {
  if(req.query.id) {
    Note.getOne(req.query.id)
    .then( data => {sendJSON(res,data)} )
    .catch( err => {
      res.statusCode = 404;
      res.statusMessage = 'Not Found';
      res.write(JSON.stringify(err));
      res.end();
    });
  }
  else {
    Note.getAll().then(
      data => sendJSON(res,data))
    .catch(err =>  {
      res.statusCode = 404;
      res.statusMessage = 'Not Found';
      res.write(JSON.stringify(err));
      res.end();
    });
  }
});

router.post('/api/v1/notes', (req,res) => {
  let note = new Note(req.body);
  note.save()
  .then( data => sendJSON(res,data) )
  .catch(console.error);
});

router.delete('/api/v1/notes', (req,res) => {
  if(req.query.id) {
    Note.deleteOne(req.query.id)
    .then( success => {
      res.statusCode = 204;
      res.statusMessage = 'OK';
      res.end();
    })
    .catch(console.error);
  }
});