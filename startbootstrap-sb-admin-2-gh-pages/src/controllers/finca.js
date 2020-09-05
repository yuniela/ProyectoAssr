// controllers/finca.js

const Finca = require('../models/Finca');

exports.finca_create = function (req, res) {

    const {nombre} = req.body;
    const finca = new Finca({nombre});

    finca.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(finca);
    })
};


exports.finca_getAll = function(req,res){
    Finca.find().then((finca) => {

        res.status(200).send(finca);
        fincas.push(finca);
    })
    .catch((err)=>{
        res.status(500).send({
            message: err.message|| "Error Occured"
        });
    });
};


exports.finca_getOne = function(req,res){
    Finca.findById(req.params.id, function (err, finca){
        if(err) return (err);
        res.send(finca);
    })
};


exports.finca_update = function(req,res){
    Finca.findByIdAndUpdate(req.params.id, {$set: req.body},
        function (err,finca){
            if(err) return next(err);
            res.status(200).send(finca);
        })
};

exports.finca_delete = function(req,res){
    Finca.findByIdAndRemove(req.params.id, function (err){
        if(err) return next(err);
        res.send('Finca eliminada');
    })
};