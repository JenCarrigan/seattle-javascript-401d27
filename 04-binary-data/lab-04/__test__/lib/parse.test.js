'use strict'

const parse = require('../../parse.js');

function Bitmap(filePath) {
  return this.file = filePath;
}

let bitmap = new Bitmap('../../assets/baldy.bmp');

fs.readFile('../../assets/baldy.bmp', (err, data) => {
    if (err) throw err;
    var buffer = data;
});

describe('Parse ability', () => {
    it('should give properties to new bmp', () => {
        parse(bitmap, buffer)
    });
});