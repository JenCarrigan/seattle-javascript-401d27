'use strict'

//first party lib
const http = require('http');
const cowsay = require('cowsay');

//parser makes the URL into an object with pathname, queries, etc.
//READ WHAT ETC IS!!
const parser = require('./lib/urlParser');

const reqHandler = (req, res) => {
  console.log(`${req.method} ${req.url}`);
  console.log('header', req.headers);

  parser(req).then(req => {
    // these if stmts do the same that express does under the hood
    // app.get('/', (req,res) => res.send('Hello!'));
    // app.get('foo/bar/baz', (req,res) => res.send('Hello!'));
    if( req.method === 'GET' && req.parsed.pathname === '/') {
      res.setHeader('Content-Type', 'text/html');
      res.statusCode = 200;
      res.statusMessage = 'OK';

      //this is random html. shows whatever you have in the URL after you = (http://localhost:3000?this=that&you=cool
      res.write(`<!DOCTYPE html>
      <html>
        <head>
          <title> cowsay </title>  
        </head>
        <body>
         <header>
           <nav>
             <ul> 
               <li><a href="/cowsay">cowsay</a></li>
             </ul>
           </nav>
         <header>
         <main>
           This project takes two GET routes and a POST route to output a cowified message to the client.
         </main>
        </body>
      </html>`);

      res.end();
      return;
    }

    else if( req.method === 'GET' && req.parsed.pathname === '/cowsay') {
      res.setHeader('Content-Type', 'text/html');
      res.statusCode = 200;
      res.statusMessage = 'OK';

      if (req.query.text === '') {
        res.write(`<!DOCTYPE html>
        <html>
          <head>
            <title> cowsay </title>  
          </head>
          <body>
            <h1> cowsay </h1>
            <pre>
              cowsay.say(I need something to say!);
            </pre>
          </body>
        </html>`)
      }
      else {
        res.write(`<!DOCTYPE html>
        <html>
          <head>
            <title> cowsay </title>  
          </head>
          <body>
            <h1> cowsay </h1>
            <pre>
              ${cowsay.say({text: req.query.text})}
            </pre>
          </body>
        </html>`);
      }
    
      res.end()
      return;
    }

    else if( req.method === 'POST' && req.parsed.pathname === '/api/cowsay') {
      console.log('request query text', req.query.text);

      res.setHeader('Content-Type', 'text/json');
      res.statusCode = 200;
      res.statusMessage = 'OK';

      res.write(JSON.stringify(cowsay.say(req.body)));

      res.end()
      return;
    }

    else {
      res.setHeader('Content-Type', 'text/html');
      res.statusCode = 404;
      res.statusMessage = 'Not Found';
      res.write('No page exists!');
      res.end();
    }
  }) //this closes the then of the promise
  .catch(err => {
    res.writeHead(400);
    res.statusMessage = 'Error. Need body or text or body';
    res.end();
  });
};

// server callback
const app = http.createServer(reqHandler);

//export the stop and start methods in an object used by index.js
module.exports = {
  start: (port,callback) => app.listen(port, callback),
  stop: (callback) => app.close(callback),
};