'use strict'

const fs = require('fs');

module.exports = (bmp, newName) => {
    console.log(newName, 'HEY JEN');

    fs.writeFile(newName, bmp.buffer, (err, out) => {
        if(err) {
            throw err;
        }
        console.log(`Bitmap Transformed: ${newName}`);
    });
};