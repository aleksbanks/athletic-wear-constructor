const express = require('express');
const { Order } = require('../db/models')
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

router.get('/adminpage', sessionChecker, async (req, res) => {
  const allOrders = await Order.findAll();
  // console.log(allOrders);
  res.render('./admin/adminpage', { layout: false, allOrders });
});

// router.get('/adminpage', (req, res)=>{
//   res.render('.admin/adminpage')
// })
// const responsFormServer = await fetch('/books/find',{
//   method:'POST',
//   headers: { // http-заголовки
//   'Content-Type': 'application/json', // тип контента
// },
// body: J




// router.get('/add', async (req, res) => { // ручка добавления поста
//   const messages = await Text.findAll(); // находим все старые посты чтобы отобразить на странице
//   res.render('messageForm', { messages }); // рендерим messageForm
// });




router.get('/adminpage/logout', sessionChecker, (req, res) => {
  req.session.destroy();
  res.cookie('Session', '', { expire: 1 });
  res.redirect('/');
});

module.exports = router;
