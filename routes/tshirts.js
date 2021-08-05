const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('tshirt', { layout: false })
})

module.exports = router
