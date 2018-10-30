'use strict'

//first party mods
const url = require('url');
const queryString = require('querystring');
const body = require('./bodyParser.js');

module.exports = (req) => {
  return new Promise( (resolve, reject) => {
    if( !(req || req.url) ) {
      reject('Invalid Request.');
    }

    req.parsed = url.parse(req.url);
    req.query = queryString.parse(req.parsed.query);

    if( !req.method.match(/POST|PUT|PATCH/) ) {
      resolve(req);
    }
    else {
      return body(req).then(req => {
        resolve(req);
      })
      .catch(err => {
        reject(err);
      });
    } 
  });
};