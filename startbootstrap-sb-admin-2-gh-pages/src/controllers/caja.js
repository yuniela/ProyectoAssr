const Caja = require('../models/Caja');



exports.caja_create = function (req, res) {

    const {tipoBanano,peso} = req.body;
    const caja = new Caja({tipoBanano,peso});

    caja.save(function (err) {
        if (err) {
            return next(err);
        }
        res.render('buttons');
    })
};


exports.caja_getAll = function(req,res){
    Caja.find().then((caja) => {

        res.status(200).send(caja);
        cajas.push(caja);
    })
    .catch((err)=>{
        res.status(500).send({
            message: err.message|| "Error Occured"
        });
    });
};


exports.caja_getOne = function(req,res){
    Caja.findById(req.params.id, function (err, caja){
        if(err) return (err);
        res.send(caja);
    })
};


