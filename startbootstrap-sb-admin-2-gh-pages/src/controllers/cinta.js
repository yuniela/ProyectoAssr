
const Cinta = require('../models/Cinta');


exports.cinta_create = function (req, res) {

    const {nombre} = req.body;
    const cinta = new Cinta({nombre});

    cinta.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(cinta);
    })
};


exports.cinta_getAll = function(req,res){
    Cinta.find().then((cinta) => {

        res.status(200).send(cinta);
        cintas.push(cinta);
    })
    .catch((err)=>{
        res.status(500).send({
            message: err.message|| "Error Occured"
        });
    });
};


exports.cinta_getOne = function(req,res){
    Cinta.findById(req.params.id, function (err, cinta){
        if(err) return (err);
        res.send(cinta);
    })
};


exports.cinta_update = function(req,res){
    Cinta.findByIdAndUpdate(req.params.id, {$set: req.body},
        function (err,cinta){
            if(err) return next(err);
            res.status(200).send(cinta);
        })
};

exports.cinta_delete = function(req,res){
    Cinta.findByIdAndRemove(req.params.id, function (err){
        if(err) return next(err);
        res.send('Cinta eliminada');
    })
};