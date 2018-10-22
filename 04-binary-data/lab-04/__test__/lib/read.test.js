'use strict';

const read = require('../../read.js');
const Bitmap = require('../../bitmap.js');

const bmp = new Bitmap('./assets/baldy.bmp');

describe('Read Functionality', () => {
    it('should read a file', (done) => {
        read(bmp, 'greyscale', bmp.file, (err, buffer) => {
            expect(err).toBeNull();
            expect(buffer).toBeInstanceOf(Buffer);
            done();
        });
    });
});