const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
  res.render('index');

});

router.get('/about', (req,res) => {
    res.render('ini');
  });

router.get('/tables',(req,res) =>{
  res.render('tables');

});

router.get('/charts',(req,res) =>{
  res.render('charts');
});

router.get('/buttons',(req,res) =>{
  res.render('buttons');
});

router.get('/modificar',(req,res) =>{
  res.render('modificar');
});

router.get('/cards',(req,res) =>{
  res.render('cards');
});




module.exports = router;