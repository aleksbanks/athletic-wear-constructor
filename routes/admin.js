const express = require('express');

const { sessionChecker } = require('../middleware/commonMiddleware');
const router = express.Router();
const chalk = require('chalk');

router.get('/', (req, res) => {
  res.render('./admin/adminform', { layout: false });
});

router.post('/', (req, res) => {
  const { login, password } = req.body;
  if (login === 'admin' && password === 'admin') {
    req.session.login = login;
    req.session.password = password;
    res.redirect('./admin/adminpage');
  } else {
    res.redirect('/');
  }
});

router.get('/adminpage', sessionChecker, (req, res) => {
  res.render('./admin/adminpage', { layout: false });
});

router.get('/adminpage/logout', sessionChecker, (req, res) => {
  req.session.destroy();
  res.cookie('Session', '', { expire: 1 });
  res.redirect('/');
});

module.exports = router;
