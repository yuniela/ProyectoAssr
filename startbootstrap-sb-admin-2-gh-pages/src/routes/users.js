const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require("jsonwebtoken");

const { check, validationResult, Result} = require('express-validator');
const { resolveInclude } = require('ejs');

router.get('/users/signin',(req,res)=>{
  res.render('signin');
});

router.get('/users/signup', (req,res)=>{
  res.render('signup');
});

router.post('/register',(req, res) =>{
  const {name, email, password, confirm_password} = req.body;
  const user = new User({name,email,password});
  user.save(err => {
    if(err){
      res.status(500).send('Usuario existente en el sistema')
    }else{
      res.render('signin');
    }
  });
});

router.post('/authenticate',(req, res) =>{
  const {email,password} = req.body;

  User.findOne({email}, (err, user) =>{
    if(err){
      res.alert('');
    }else if(!user){
      console.log(user)
      res.status(500).send('No existe Usuario en el sistema');
    }else{
      user.isCorrectPassword(password, (err, result) =>{
        if(err){
          res.status(500).send('Error en autenticar')
        }else if(result){
          res.render('index');
        }else
          res.status(500).send('Usuario/contrasena incorrecta');
      });
    }
  });
});

module.exports = router;