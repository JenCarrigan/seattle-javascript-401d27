'use strict'

//memory or fs
const memory = require('./memory.js');
const filesystem = require('./filesystem.js');

let storageMod = memory;

if(process.env.STORAGE === 'filesystem') {
  storageMod = filesystem;
}

module.exports = storageMod;