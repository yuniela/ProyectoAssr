const mongoose = require('mongoose');
const {Schema} = mongoose;

const CajaSchema = new Schema({
  tipoBanano: {type: String, required: true},
  peso: {type: Number, required: true},
  fecha: {type: Date, default: Date.now},
});

const model = mongoose.model('Caja',CajaSchema);
module.exports = model;