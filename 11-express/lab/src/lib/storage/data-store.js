//const memory = require('./memory.js');
import filesystem from './filesystem.js';

let storageMod;

if(process.env.STORAGE === 'filesystem') {
  storageMod = filesystem;
}

export default storageMod;