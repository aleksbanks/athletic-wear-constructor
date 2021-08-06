const express = require('express');
const { Order } = require('../db/models')
const { sessionChecker } = require('../middleware/commonMiddleware');
const router = express.Router();
const chalk = require('chalk');
function formatDate(date) {

  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}


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
  allOrders.map((e) => {
    e.dataValues.createdAt = formatDate(e.dataValues.createdAt)
  })
  res.render('./admin/adminpage', { layout: false, allOrders });
});
router.get('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Order.destroy({ where: { id } })
  res.status(200).end()
})





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
