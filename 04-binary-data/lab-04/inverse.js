'use strict'

//const parse = require('./parse.js');
//const transform = require('./transform.js');
const write = require('./write.js');

module.exports = (bmp) => {
    if (bmp.buffer.length === 0) {
        throw new Error ('Not a valid bitmap');
    }
    console.log('Transforming bitmap into inverse', bmp);

    for (let i = 122; i < 1146; i += 4) {
        bmp.buffer[i] = 255 - bmp.buffer[i];
        bmp.buffer[i+1] = 255 - bmp.buffer[i+1];
        bmp.buffer[i+2] = 255 - bmp.buffer[i+2];
    }

    let newFile = bmp.file.replace(/\.bmp/, `.inverse.bmp`);
    write(bmp, newFile);

};

