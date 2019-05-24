var mongoose = require('mongoose');

var factSchema = new mongoose.Schema({
    text: String
  }, {
    timestamps: true
  });

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  experience: String,
  avatar: String,
//   greenhouse: [greenhouseSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);