const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const cart = {}
  res.render('cart', { cart })
})

module.exports = router
