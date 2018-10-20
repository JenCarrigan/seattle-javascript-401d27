'use strict';

const fs = require('fs');

module.exports = (path, done) => {

    const gotFile = (err, fileData) => {
        if (err) {
            done(err);
            return;
        }
        done(null, fileData.toString());
    }

    fs.readFile(path, gotFile);
 
};