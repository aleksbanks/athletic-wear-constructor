const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('socks', { layout: false })
})

module.exports = router
