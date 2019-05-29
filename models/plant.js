const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var plantSchema = new mongoose.Schema({
    // _id: Schema.Types.ObjectsId,
    plant: {type: String, required: true},
    light: String,
    water: String,
    soil: String,
    pot: Number,
    petfriendly: Boolean
});

module.exports = mongoose.model('Plant', plantSchema);
