const express = require('express');
const router = express.Router();
const Empacadora = require('../models/Empacadora');
const empacadora_controller = require('../controllers/empacadora');
const { check, validationResult, Result} = require('express-validator');
const { resolveInclude } = require('ejs');


// a simple test url to check that all of our files are communicating correctly.
router.post('/guardarEmpacadora', empacadora_controller.empacadora_create);

router.get('/showEmpacadoras',empacadora_controller.empacadora_getAll);

router.get('/showEmpacadorasporId/:id',empacadora_controller.empacadora_getOne);

router.put('/CintasActualizar/:id',empacadora_controller.empacadora_update);

router.delete('/borrarCinta/:id/delete',empacadora_controller.empacadora_delete);

module.exports = router;