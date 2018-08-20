const express = require('express');
const router = express.Router();
const User = require('../models/user')
const jwt = require('jsonwebtoken')

/* GET users listing. */
router.post('/', function(req, res, next) {
  
  User
  .findOne({
    username : req.body.username
  })
  .then( response => {
      if(response){
        res.status(201).json({message:`account ${response.username} registered`})
      }else{
        next()
      }
  })
  .catch( err => {
    json({message:"your information is not valid"})
  })

}, function (req,res){

  User.create({
    username : req.body.username,
    password : req.password
  })
  .then ( response => {
    res.status(200).json({
      username:response.username,
      password : response.password
    })
  })
  .catch ( err => {
    res.status(400).json({message:"your information is not valid"})
  })  

} );

router.post('/auth', function(req, res, next) {
  User
  .findOne({
    username : req.body.username
  })
  .then ( response => {
    //give token here
    if(response){
      if(response.password === req.password){
        var token = jwt.sign({ id:response._id, username:response.username, email:response.email }, process.env.tokenSecretKey);
        res.status(200).json({token:token})
      }else{
        res.status(401).msg({msg:"password is not valid"})  
      }
    }else{
      res.status(401).msg({msg:"username is not valid"})
    }
    res.status(200).json({data:response})
  })
  .catch ( err => {
    res.status(400).json({msg:"your information is not valid"})
  })
});

module.exports = router;
