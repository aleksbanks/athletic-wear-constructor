const express = require('express');
const router = express.Router();
const Shorts  = require('../db/models')





router.get('/', (req, res)=>{
  res.render('shorts')
})













module.exports = router
