import mongoose from 'mongoose';

let Schema = mongoose.Schema;

const attySchema = new Schema ({
  name: String,
  numOfClients: Number,
  startDate: Date
});

let atty = mongoose.model('Attorneys', attySchema);

export default atty;