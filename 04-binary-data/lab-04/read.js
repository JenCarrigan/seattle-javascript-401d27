'use strict';

const fs = require('fs');
const parse = require('./parse.js');

module.exports = (bmp, operation, path, done) => {

    fs.readFile(path, (err, buffer) => {
        if(err) {
            done(err);
            return;
        }
        done(null, buffer);
        parse(operation, bmp, buffer);

    });

 
};