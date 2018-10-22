'use strict'

const fs = require('fs');
const util = require('util');

// const readFile(path, callback) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             callback(err);
//             return;
//         }
//         contents.push(data.toString());
//         callback(null);
//     });
// };

// // for unknown number of files, maybe use .shift() method to chop off front of array each time

// readFile(paths[0]. (err) => {
//     err ? doneHandler(err) : readFile(paths[1], (err) => {
//         err ? doneHandler(err) : readFile(paths[2], (err) => {
//             doneHandler(err, contents);
//         });
//     });
// });

module.exports = (paths, done) => {

    let contents = [];

    const readFile = util.promisify(fs.readFile);

    readFile(paths[0]).then(data => contents.push(data.toString())).then(() => readFile(paths[1])).then(data => contents.push(data.toString())).then(() => readFile(paths[2])).then(data => contents.push(data.toString())).then(() => doneHandler(null, contents)).catch(doneHandler);
};