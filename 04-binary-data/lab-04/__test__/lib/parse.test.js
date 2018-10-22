'use strict'

// this one's got deeper issues

const parse = require('../../parse.js');
const fs = require('fs');
const Bitmap = require('../../bitmap.js');
const read = require('../../read.js');

// so you've got a Bitmap class that allows creation of individual instances
// each instance will have ONE thing at the moment, a 'file' property
let bitmap = new Bitmap('./assets/baldy.bmp');
let buffer; // +1

// this async operation needs to be inside the test aka 'it' function


describe('Parse ability', () => {
    it('should give properties to new bmp', (done) => {
        read(bitmap, 'greyscale', bitmap.file, (err, buffer) => { // I needed to update path
            // since this is an async test need done
            parse('greyscale', bitmap, buffer) // this buffer does not exist in this scope so let's refactor

            // let's test that bitmap has been modified as expected
            //console.log(bitmap.type);
            expect(bitmap.buffer).toEqual(buffer);
            expect(bitmap.type).toBe('BM'); 
            // etc.

            // I just ran tests and they passed. Going to intentionally fail one

            // once testing complete call done
            done();
        });
    });
});

// issues make sense?
// yes I had earlier changed the buffer as above