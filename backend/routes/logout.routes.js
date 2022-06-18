const logoutRoutes = require('express').Router();

logoutRoutes.get('/', (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('sid');
    res.redirect('/');
  } catch (error) {
    res.send('no delete sessions!!!');
  }
});

module.exports = logoutRoutes;
