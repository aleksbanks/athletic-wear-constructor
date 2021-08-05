const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const tshirt = {};
  res.render('tshirt', tshirt)
})

module.exports = router
