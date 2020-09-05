const express = require('express');
const router = express.Router();
const Caja = require('../models/Caja');
const caja_controller = require('../controllers/caja');
const { check, validationResult, Result} = require('express-validator');
const { resolveInclude } = require('ejs');


// a simple test url to check that all of our files are communicating correctly.
router.post('/guardarCaja', caja_controller.caja_create);

router.get('/showCajas',caja_controller.caja_getAll);

router.get('/showCajasporId/:id',caja_controller.caja_getOne);

module.exports = router;