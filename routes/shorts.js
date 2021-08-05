const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('shorts', { layout: false })
})

module.exports = router
