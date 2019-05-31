const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var greenhouseSchema = new mongoose.Schema({
    name: String,
    plants: [{type: Schema.Types.ObjectId, ref: 'Plant'}],
    hardinesszone: String,
    sunexposure: String
  });

  module.exports = mongoose.model('Greenhouse', greenhouseSchema);