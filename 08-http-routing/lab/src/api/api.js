'use strict'

const router = require('../lib/router.js');

router.get('/api/v1/notes', (req,res) => {
  let id = req.query.id || '';

  if (id === '0') {
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 404;
    res.statusMessage = 'Not Found';
    res.end('ID was not found.');
  }
  else if (id === '') {
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 404;
    res.statusMessage = 'Not Found';
    res.end('No ID input.');
  }
  else {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write(`ID ${id} was requested.`);
    res.end();
  }
  
});

router.post('/api/v1/notes', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write(JSON.stringify(req.body));
  res.end();
});

router.put('/api/v1/notes', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write(JSON.stringify(req.body));
  res.end();
});

router.delete('/api/v1/notes', (req,res) => {
  let id = req.query.id || '';
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write(`ID ${id} was deleted.`);
  res.end();
});