const mongoose = require('mongoose');
const {Schema} = mongoose;

const FincaSchema = new Schema({
  nombre: {type: String, required: true},
  empacadoras: [{type: Schema.Types.ObjectId, ref: 'Empacadoras', }],
  updateBy: {type: Schema.Types.ObjectId},
},
{ timestamps: true }
);

//FincaSchema.plugin(require('mongoose-autopopulate'));
const model = mongoose.model('Finca',FincaSchema);
module.exports = model;