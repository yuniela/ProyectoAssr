const mongoose = require('mongoose');
const {Schema} = mongoose;


const CintaSchema = new mongoose.Schema({
    nombre:{type: String, required:true},
    operacion: {type: Boolean, default: true},
    cajas: [{type: Schema.Types.ObjectId, ref:'Cajas'}]
},
{timestamps: true}
);

//CintaSchema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model('Cinta',CintaSchema);


module.exports = model;