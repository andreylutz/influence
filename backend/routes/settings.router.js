/* eslint-disable camelcase */
const settings = require('express').Router();
const {
  User_about, User, Company_about, Skill, UserSkill,
} = require('../db/models');

// /api/settings

settings.route('/allCategories')
  .get(async (req, res) => {
    const allUsers = await User.findAll(
      { raw: true, include: [User_about, Company_about, Skill] },
    );
    const allUserSkills = await User.findAll(
      { raw: true, include: [Skill] },
    );
    console.log(allUserSkills);
    res.json(allUsers);
  });

settings.route('/users')
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
        user_id: userId,
      });

      const newSkill = await Skill.create({ name: skill });
      const newUserSkill = await UserSkill.create({ skill_id: newSkill.id, user_id: userId });
      const allUserData = await User_about.findAll({ raw: true });
      res.json(allUserData);
    } else {
      const allUserData = await User_about.findAll({ raw: true });
      res.json({ allUserData });
    }
  });

settings.route('/companies')
  .post(async (req, res) => {
    const { companyData } = req.body;
    console.log(companyData);
    const {
      logo, companyName, location, skill, company_id,
    } = companyData;

    const findCompanyAbout = await Company_about.findOne({ where: { user_id: company_id } });

    if (!findCompanyAbout) {
      const newCompanyAbout = await Company_about.create({
        logo,
        companyName,
        location,
        skill,
        user_id: company_id,
      });
      console.log('oooooooooooooooo', newCompanyAbout);

      const newSkill = await Skill.create({ name: skill });
      const newCompanySkill = await UserSkill.create({
        skill_id: newSkill.id, user_id: company_id,
      });
      const allCompanyData = await Company_about.findAll({ raw: true });
      res.json(allCompanyData);
    }
  });

module.exports = settings;
