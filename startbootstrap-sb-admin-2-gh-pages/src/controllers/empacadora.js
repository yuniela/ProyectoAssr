const Empacadora = require('../models/Empacadora');



exports.empacadora_create = function (req, res) {

    const {nombre} = req.body;
    const empacadora = new Empacadora({nombre});

    empacadora.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('');
    })
};


exports.empacadora_getAll = function(req,res){
    Empacadora.find().then((empacadora) => {

        res.status(200).send(empacadora);
        empacadoras.push(empacadora);
    })
    .catch((err)=>{
        res.status(500).send({
            message: err.message|| "Error Occured"
        });
    });
};


exports.empacadora_getOne = function(req,res){
    Empacadora.findById(req.params.id, function (err, empacadora){
        if(err) return (err);
        res.send(empacadora);
    })
};

exports.empacadora_update = function(req,res){
    Empacadora.findByIdAndUpdate(req.params.id, {$set: req.body},
        function (err,empacadora){
            if(err) return next(err);
            res.status(200).send(empacadora);
        })
};

exports.empacadora_delete = function(req,res){
    Empacadora.findByIdAndRemove(req.params.id, function (err){
        if(err) return next(err);
        res.send('Empacadora eliminada');
    })
};