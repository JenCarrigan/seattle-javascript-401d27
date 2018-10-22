'use strict'

//const Bitmap = require('./bitmap.js');
//const read = require ('./read.js');
//const parse = require('./parse.js');
const greyscale = require('./greyscale.js');
const inverse = require('./inverse.js');

//const bitmap = new Bitmap('./assets/baldy.bmp');

module.exports = (operation, bmp) => {
    if (operation === 'greyscale') {
        greyscale(bmp);
    }
    else {
        inverse(bmp);
    }
    //let newFile = bmp.file.replace(/\.bmp/, `.greyscale.bmp`);
    
};

