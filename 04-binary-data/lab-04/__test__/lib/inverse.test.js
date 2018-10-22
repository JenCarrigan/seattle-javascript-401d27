'use strict'

const inverse = require('../../inverse.js');
const Bitmap = require('../../bitmap.js');
const read = require('../../read.js');
const parse = require('../../parse.js');

let bitmap = new Bitmap('./assets/baldy.bmp');
let oldBuf = bitmap.buffer;

describe('Inverse Transformation', () => {
    it('should change the buffer', (done) => {
        read(bitmap, 'inverse', bitmap.file, (err, buffer) => {
            parse('inverse', bitmap, buffer);
            inverse(bitmap);
            expect(bitmap.buffer).not.toBe(oldBuf);
            done();
        });
    });
});