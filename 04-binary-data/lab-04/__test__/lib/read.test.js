'use strict';

const read = require('../../read.js');

describe('Read Functionality', () => {
    it('should read a file', () => {
        read('../../assets/baldy.bmp', (err, actual) => {
            let expected = 0;
            expect(actual.length).not.toBe(expected);
        });
    });
});