'use strict'

const fs = require('fs');
const util = require('util');

const usingUtil = (paths, done) => {

  let contents = [];

  const readFile = util.promisify(fs.readFile);

  readFile(paths[0]).then(data => contents.push(data.toString())).then(() => readFile(paths[1])).then(data => contents.push(data.toString())).then(() => readFile(paths[2])).then(data => contents.push(data.toString())).then(() => doneHandler(null, contents)).catch(doneHandler);

  return contents;
};

let file3 = `${__dirname}/../data/eenie.txt`;
let file2 = `${__dirname}/../data/meenie.txt`;
let file1 = `${__dirname}/../data/moe.txt`;

let fileArr = [];
fileArr.push(file1, file2, file3);

const readAll = (paths, callback) => {
  let result = [];
  console.log(paths);
  const reader1 = (err, data) => {
    if (err) {
      callback(err);
    }
    result.push(data.toString());
    fs.readFile(paths[1], reader2);
    console.log(paths[1]);

  }

  const reader2 = (err, data) => {
    if (err) {
      callback(err);
    }
    result.push(data.toString());
    fs.readFile(paths[2], reader3);
    console.log('read 2');
  }

  const reader3 = (err, data) => {
    if (err) {
      callback(err);
    }
    result.push(data.toString());
    callback(null, result);
    console.log('read 3');

  }

  fs.readFile(paths[0], reader1);

};

const readFiles = (fileArr, (err, result) => {
  if (err) {
    throw err;
  }

  return result;
});

module.exports = {
  readAll,
  usingUtil,
};

//readAll(fileArr, readFiles);