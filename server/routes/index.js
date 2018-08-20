var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
const Item = require("../models/item")
/* GET home page. */
router.post('/', function (req, res) {
  console.log(req.headers.Authorization)
  Item
  .create({
    name : req.body.name,
    price : req.body.price,
    stock : req.body.stock,
    tags : req.body.tags
  })
  .then( response => {
    res.status(200).json({
      name : response.name,
      price : response.price,
      stock : response.stock,
      tags : response.tags
    })
  })
  .catch( err =>{
    res.status(400)
  })
  
});

router.get ('/', function(req, res){
  console.log(req.headers.Authorization)
  
    Item
    .find()
    .then( response=>{
      res.status(200).json({data:response})
    })
    .catch(err=> {
      res.status(400)
    })
    
})

module.exports = router;
