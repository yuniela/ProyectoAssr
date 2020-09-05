const mongoose = require('mongoose');
const {Schema} = mongoose;

const EmpacadoraSchema = new Schema({
  nombre: {type: String, required: true},
  operativo: {type: Boolean, default: true},
  cintas: [{type: Schema.Types.ObjectId, ref: 'Cinta', }],
  updateBy: {type: Schema.Types.ObjectId},
},
{ timestamps: true }
);

//FincaSchema.plugin(require('mongoose-autopopulate'));
const model = mongoose.model('Empacadora',EmpacadoraSchema);
module.exports = model;