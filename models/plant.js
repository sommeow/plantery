var mongoose = require('mongoose');

var plantSchema = new mongoose.Schema({
    plant: String,
    light: String,
    water: String,
    soil: String,
    pot: Number,
    petfriendly: Boolean
});

var greenhouseSchema = new mongoose.Schema({
    hardinesszone: String,
    sunexposure: String,
    plant: [plantSchema]
  });

  var nurserySchema = new mongoose.Schema({
    plant: [plantSchema],
    vendor: String,
    cost: Number
  });

module.exports = mongoose.model('Plant', plantSchema);
