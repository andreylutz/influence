const infoRouter = require('express').Router();
const { User_about, User, Company_about, Skill } = require('../db/models');

infoRouter.post('/', async (req, res) => {
  console.log(`===>${req.body}`);
  const user_about = await User_about.findAll({ where: { user_id: req.body.us }, raw: true });
  res.json(user_about);
});

infoRouter.post('/', async (req, res) => {
  const user = await User.findAll({ raw: true, include: [User_about, Company_about, Skill] });
  res.json(user);
});

module.exports = infoRouter;
