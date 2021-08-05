const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const shorts = {};
  res.render('shorts', { shorts })
})

module.exports = router
