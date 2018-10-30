'use strict'

const uuid = require('uuid/v4');
const storage = require('../lib/storage/data-store.js');

class Note {
  constructor(config) {
    this.id = uuid();
    // this.subject = subject;
    // this.noteBody = noteBody;
    this.subject = config && config.subject || '';
    this.noteBody = config && config.noteBody || '';
  }

  //model is gonna rep the info about itself and exposing ways of interacting with it

  //save notes
  save() {
    //saves in mem or fs
    return storage.save(this);
  }

  static getAll() {
    //returns all notes - NOTE THE RETURN!!
    return storage.getAll();
  }

  static getOne(id) {
    return storage.getOne(id);
  }

  static deleteOne(id) {
    return storage.delete(id);
  }

  static updateOne(criteria) {
    return storage.update(this);
  }
}

//so that we can use notes outside
module.exports = Note;