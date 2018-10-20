'use strict'

const fs = require('fs');
const transform = require('../../../lab-04/index.js');
// test for proper number of arguments
// test for first arg that matches a bmp filepath
// test for second arg that matches one of the functions
// test for new bmp creation
// test for bmp differences
describe('Bitmap Transformation', () => {
    describe('Arguments are valid', () => {
        it('should throw error if more than or less than two args', () => {
            expect( () => transform.checkArgs() ).toThrow();
            expect( () => transform.checkArgs(3) ).toThrow();
        });
        it('should throw error if first arg not filepath', () => {
            expect( () => transform.checkArgs( ['merv', 'greyscale'] ) ).toThrow();
        });
        it('should throw error if second arg not operation', () => {
            expect( () => transform.checkArgs( ['./assets/baldy.bmp', 'merv'] ) ).toThrow();
        });
    });

    describe('Bitmap Creation', () => {
        //let bmp = new transform.Bitmap('./assets.baldy.bmp');

        it('should create a new bitmap', () => {
            let bmp = () => transform.checkArgs( ['./assets/baldy.bmp', 'greyscale'] );
            console.log(bmp.file);
            expect(bmp.file).toStrictEqual(undefined);

            //transform.checkArgs().bitmap.file
        });
    });
});
