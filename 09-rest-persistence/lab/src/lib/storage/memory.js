'use strict'

const storage = module.exports = {};
const database = {};

storage.getAll = () => {
  return Promise.resolve(database);
};

storage.getOne = (id) => {
  return new Promise( (resolve,reject) => {
    if(database[id]) {
      resolve(database[id]);
    }
    else {
      reject(`${id} not found!`);
    }
  });
};

storage.save = (data) => {
  return new Promise( (resolve,reject) => {
    if(data.id) {
      let message = `Your note with the subject ${data.subject} has been added!`;
      database[data.id] = data;
      resolve(`${message} has been added.`);
    }
    else {
      reject('No ID given!');
    }
  });
};

storage.delete = (id) => {
  return new Promise( (resolve,reject) => {
    if(database[id]) {
      console.log(database[id].id);
      delete database[id];
      resolve();
    }
    else {
      reject(`${id} not found!`);
    }
  });
};