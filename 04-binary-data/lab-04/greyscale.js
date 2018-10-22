'use strict'

//const parse = require('./parse.js');
const write = require('./write.js');

module.exports = (bmp) => {
    if (bmp.buffer.length === 0) {
        throw new Error ('Not a valid bitmap');
    }

    console.log('Transforming bitmap into greyscale', bmp);

    for (let i = 122; i < 1146; i+=4) {
        let avg = (bmp.buffer[i] + bmp.buffer[i+1] + bmp.buffer[i+2]) / 3;
        bmp.buffer[i] = avg;
        bmp.buffer[i+1] = avg;
        bmp.buffer[i+2] = avg;
    }

    let newFile = bmp.file.replace(/\.bmp/, `.greyscale.bmp`);
    write(bmp, newFile);

};