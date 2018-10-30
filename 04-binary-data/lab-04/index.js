'use strict';

const Bitmap = require('./bitmap.js');
const read = require('./read.js');

module.exports = (args) => {
  if (args.length !== 2) {
    throw new Error('Need a filepath to bitmap and operation you want to perform');
  }

  if (args[0] !== './assets/baldy.bmp') {
    throw new Error('Need a bitmap for your first argument');
  }

  if(args[1] === 'greyscale' || args[1] === 'inverse')
  {
    const file = args[0];
    const operation = args[1];
    const bitmap = new Bitmap(file);
    console.log(bitmap.file);
    read(bitmap, operation, bitmap.file);
    return bitmap; 
  }
  else {
    throw new Error('Choose greyscale or inverse as your second argument');
  }
};


