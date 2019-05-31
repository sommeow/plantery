const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var plantSchema = new mongoose.Schema({
  // _id: Schema.Types.ObjectsId,
  plant: String,
  light: String,
  water: String,
  soil: String,
  pot: Number,
  petfriendly: Boolean
});

var greenhouseSchema = new mongoose.Schema({
  name: String,
  plants: [{type: Schema.Types.ObjectId, ref: 'Plant'}],
  hardinesszone: String,
  sunexposure: String
});

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  plants: [plantSchema],
  greenhouses: [greenhouseSchema]
}, {
  timestamps: true 
});

module.exports = mongoose.model('User', userSchema);