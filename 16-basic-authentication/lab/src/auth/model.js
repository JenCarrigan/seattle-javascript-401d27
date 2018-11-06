import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const schema = new Schema ({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

schema.pre('save', async function() {
  this.password = await bcrypt.hash(this.password, 10);
});

schema.methods.generateToken = function() {
  return jwt.sign( {id: this._id}, process.env.SECRET || 'changeit' );
};

schema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

schema.statics.authenticate = function(auth) {
  let query = { username: auth.username };
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
    .catch(error => error)
};

export default mongoose.model('User', schema);