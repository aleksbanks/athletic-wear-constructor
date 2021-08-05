const sessionChecker = (req, res, next) => { // проверяем есть ли сессия (ключ емеил в req.session, стр 21, 29, 48 в usersRouter.js)
  if (req.session.login) {
    next();
  } else {
    res.redirect('/');
  }
};

const layoutchanger = (req, res, next) => { // записываем имя юзера из сессии (если есть) в res.locals
  res.locals.username = req.session?.username; // optional chaining operator GOOGLE it !
  /* if (req.session) {
    res.locals.username = req.session.username;
  } */
  next();
};

module.exports = {
  sessionChecker, layoutchanger,
};
