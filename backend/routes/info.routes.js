const infoRouter = require('express').Router();
const { User_about, User, Company_about, Skill } = require('../db/models');

infoRouter.post('/', async (req, res) => {
  // const user_about = await User_about.findAll({ where: { user_id: req.body.us }, raw: true });
  // const company_about = await Company_about.findAll({ where: { user_id: req.body.us }, raw: true });
  const findUserAbout = await User_about.findOne(
    { where: { user_id: req.body.us }, raw: true },
  );
  const findCompanyAbout = await Company_about.findOne(
    { where: { user_id: req.body.us }, raw: true },
  );
  if (findUserAbout) {
    res.json({ user: findUserAbout });
  }
  if (findCompanyAbout) {
    res.json({ company: findCompanyAbout });
  }
});

infoRouter.post('/', async (req, res) => {
  const user = await User.findAll({ raw: true, include: [User_about, Company_about, Skill] });
  res.json(user);
});

module.exports = infoRouter;
