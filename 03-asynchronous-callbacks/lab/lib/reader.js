'use strict'

const fs = require('fs');
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 900079a9bc925f079054b62fe57000baab365963
let file3 = `${__dirname}/../data/eenie.txt`;
let file2 = `${__dirname}/../data/meenie.txt`;
let file1 = `${__dirname}/../data/moe.txt`;

let fileArr = [];
fileArr.push(file1,file2,file3);

const readAll = module.exports = (paths, callback) => {
    let result = [];
    const reader1 = (err, data) => {
        if(err) {
            callback(err);
        }
        result.push(data.toString());
        fs.readFile(paths[1],reader2);

    }

    const reader2 = (err, data) => {
        if(err) {
            callback(err);
        }
        result.push(data.toString());
        fs.readFile(paths[2], reader3);
    }

    const reader3 = (err, data) => {
        if(err) {
            callback(err);
        }
        result.push(data.toString());
        callback(null, result);
        
    }

    fs.readFile(paths[0], reader1);

}

const readFiles = (fileArr, (err,result) => {
    if (err) {
        throw err;
    }

    return result;
});

readAll(fileArr, readFiles);
<<<<<<< HEAD
=======
>>>>>>> 9500c9b2bc5d413027cda389caceb05cdf789750
>>>>>>> 900079a9bc925f079054b62fe57000baab365963
