const bcrypt = require('bcryptjs');
const authRouter = require('express').Router();
const { User } = require('../db/models');

// POST создать сессию (login, вход)

module.exports = authRouter;

authRouter.route('/')
  .post(async (req, res) => {
    let user;
    try {
      user = await User.findOne({
        where: { email: req.body.userEmail },
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message });
    }
    if (!user) {
      res
        .status(403)
        .json({ message: 'Имя пользователя или пароль не верный.' });
      return;
    }

    let similar;
    try {
      similar = await bcrypt.compare(req.body.userPassword, user.password);
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message });
    }
    if (!similar) {
      res
        .status(403)
        .json({ message: 'Имя пользователя или пароль не верный.' });
      return;
    }

    req.session.user = user;
    res.json({ id: user.id, email: user.email, role: user.role });
  });

module.exports = authRouter;
