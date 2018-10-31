'use strict'

const fs = require('fs');
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

const util = require('util');

module.exports = (paths, done) => {

    let contents = [];

    const readFile = util.promisify(fs.readFile);

    readFile(paths[0]).then(data => contents.push(data.toString())).then(() => readFile(paths[1])).then(data => contents.push(data.toString())).then(() => readFile(paths[2])).then(data => contents.push(data.toString())).then(() => doneHandler(null, contents)).catch(doneHandler);
};

>>>>>>> 03589ff1c41b29986334c5b8c157895a7e4ca738
>>>>>>> 572708ad0f3486d0e905710dfc76437a143113d1
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
