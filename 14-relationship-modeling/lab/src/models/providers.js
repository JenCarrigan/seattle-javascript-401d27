import mongoose from 'mongoose';

let Schema = mongoose.Schema;

const provSchema = new Schema ({
  provider: String,
  phone: String,
  atty: { type: Schema.Types.ObjectId, ref: 'Attorneys' }
});

let prov = mongoose.model('Providers', provSchema);

export default prov;