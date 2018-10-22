'use strict';

const write = require('../../write.js');
const read = require('../../read.js');
const Bitmap = require('../../bitmap.js');
const transform = require('../../transform.js');
const greyscale = require('../../greyscale.js');
const inverse = require('../../inverse.js');
const parse = require('../../parse.js');

let bmp = new Bitmap('./assets/baldy.bmp');

describe('Write Functionality', () => {
    it('should write a file', (done) => {
        read(bmp, 'greyscale', bmp.file, (err, buffer) => {
            write(bmp, './assets/baldy.scratch.js', (err, out) => {
                expect(err).toBeNull();
                done();
            });
            done();
        });
    });

    

});