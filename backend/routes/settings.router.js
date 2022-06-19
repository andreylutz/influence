/* eslint-disable camelcase */
const settings = require('express').Router();
const { User_about, User, Company_about } = require('../db/models');

// /api/settings
settings.route('/users')
  .get(async (req, res) => {
    const allUsers = await User.findAll(
      { raw: true, include: [User_about, Company_about] },
    );
    console.log(allUsers);
    res.json(allUsers);
  })
  .post(async (req, res) => {
    const { userData } = req.body;
    const {
      avatar, userName, surname, age, location, skill, userId,
    } = userData;

    const findUserAbout = await User_about.findOne({ where: { user_id: userId } });

    if (!findUserAbout) {
      const newUserAbout = await User_about.create({
        avatar,
        name: userName,
        surname,
        age,
        location,
        skill,
        user_id: userId,
      });
      const allUserData = await User_about.findAll({ raw: true });
      res.json(allUserData);
    } else {
      const allUserData = await User_about.findAll({ raw: true });
      res.json({ allUserData });
    }
  });

module.exports = settings;
