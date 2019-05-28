const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var greenhouseSchema = new mongoose.Schema({
    hardinesszone: String,
    sunexposure: String,
    plants: [{type: Schema.Types.ObjectId, ref: 'Plant'}]
  });

  module.exports = mongoose.model('Greenhouse', greenhouseSchema);