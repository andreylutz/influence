const bcrypt = require('bcryptjs');
const regRouter = require('express').Router();
const { User } = require('../db/models');

regRouter.route('/')
  .post(async (req, res) => {
    const mail = req.body.userEmail;
    const roles = req.body.role;
    if (req.body.userPasswordRepl === req.body.userPassword) {
      const pass = await bcrypt.hash(req.body.userPassword, 5);
      try {
        const user = await User.create({
          email: mail, password: pass, role: roles,
        });
        req.session.user = user;
        res.json({ id: user.id, email: user.email, role: user.role });
      } catch (error) {
        res
          .status(501)
          .json({ message: 'Пользователь с таким именем уже зарегестрирован.' });
      }
    } else {
      res
        .status(404)
        .json({ messageUnik: 'Пароли не совпадают.' });
    }
  });

module.exports = regRouter;
