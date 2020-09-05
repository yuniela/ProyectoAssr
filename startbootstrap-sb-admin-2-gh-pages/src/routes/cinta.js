const express = require('express');
const router = express.Router();
const Cinta = require('../models/Cinta');
const cinta_controller = require('../controllers/cinta');
const { check, validationResult, Result} = require('express-validator');
const { resolveInclude } = require('ejs');


// a simple test url to check that all of our files are communicating correctly.
router.post('/guardarCinta', cinta_controller.cinta_create);

router.get('/showCintas',cinta_controller.cinta_getAll);

router.get('/showCintasporId/:id',cinta_controller.cinta_getOne);

router.put('/CintasActualizar/:id',cinta_controller.cinta_update);

router.delete('/borrarCinta/:id/delete',cinta_controller.cinta_delete);

module.exports = router;