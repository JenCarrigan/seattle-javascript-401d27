'use strict'

const greyscale = require('../../greyscale.js');
const Bitmap = require('../../bitmap.js');
const read = require('../../read.js');
const parse = require('../../parse.js');

let bitmap = new Bitmap('./assets/baldy.bmp');
let oldBuf = bitmap.buffer;

describe('Greyscale Transformation', () => {
    it('should change the buffer', (done) => {
        read(bitmap, 'greyscale', bitmap.file, (err, buffer) => {
            parse('greyscale', bitmap, buffer);
            greyscale(bitmap);
            expect(bitmap.buffer).not.toBe(oldBuf);
            done();
        });
    });
});