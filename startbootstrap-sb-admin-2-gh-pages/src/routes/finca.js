const express = require('express');
const router = express.Router();
const Finca = require('../models/Finca');
const finca_controller = require('../controllers/finca');
const { check, validationResult, Result} = require('express-validator');
const { resolveInclude } = require('ejs');


// a simple test url to check that all of our files are communicating correctly.
router.post('/guardarFinca', finca_controller.finca_create);

router.get('/showFincas',finca_controller.finca_getAll);

router.get('/showFincasporId/:id',finca_controller.finca_getOne);

router.put('/FincasActualizar/:id',finca_controller.finca_update);

router.delete('/borrarFinca/:id/delete',finca_controller.finca_delete);

module.exports = router;
