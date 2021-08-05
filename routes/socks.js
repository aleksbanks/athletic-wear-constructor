const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const socks = {};
  res.render('socks', { socks })
})

module.exports = router
