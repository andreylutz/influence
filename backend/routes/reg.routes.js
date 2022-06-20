const regRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../db/models');

regRouter.route('/').post(async (req, res) => {
  const { userEmail, userPassword, role } = req.body;
  const user = await User.findOne({ where: { email: userEmail } });
  if (user) {
    res.send('Такой  уже зарегистрирован');
  } else {
    const newUser = await User.create({
      email: userEmail,
      password: await bcrypt.hash(userPassword, 7),
      role,
    });
    req.session.user = newUser;

    res.json({ id: newUser.id, email: newUser.email, role: newUser.role });
  }
});

module.exports = regRouter;
