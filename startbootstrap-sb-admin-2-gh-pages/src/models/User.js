const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator');

const saltRounds = 10;

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true },
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now}
});


UserSchema.pre('save',function(next){
    if(this.isNew || this.isModified('password')){

        const document = this;

        bcrypt.hash(document.password,saltRounds, (err, hashedPassword) => {
            if(err){
                next(err);
            }else{
                document.password = hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
});

UserSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password,this.password, function(err,same){
        if(err){
            callback(err);
        }else{
            callback(err,same);
        }
    });
}

UserSchema.plugin(uniqueValidator, { message: 'Email already in use.' });
const model = mongoose.model('User',UserSchema);
module.exports = model;

