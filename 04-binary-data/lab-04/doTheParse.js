'use strict'

const Bitmap = require('./bitmap.js');
const read = require ('./read.js');
const parse = require('./parse.js');

const bitmap = new Bitmap('./assets/baldy.bmp');

read('./assets/baldy.bmp', (err, buffer) => {
    parse(bitmap, buffer);
});