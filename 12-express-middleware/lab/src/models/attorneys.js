import uuid from 'uuid/v4';
import storage from '../lib/storage/data-store.js';
class Atty {
  constructor(config) {
    this.id = uuid();
    this.name = config && config.name || '';
    this.numOfClients = config && config.numOfClients || '';
    this.startDate = config && config.startDate || '';
  }
 
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
  static updateOne(id, criteria) {
    return storage.update(id, criteria);
  }
}
//so that we can use attys outside
export default Atty; 