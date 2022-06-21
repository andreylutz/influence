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
    res.json(allUsers);
  });

settings.route('/users')
  .post(async (req, res) => {
    const { userData } = req.body;
    const {
      avatar, userName, surname, age, location, skill, userId,
    } = userData;
    if (userId) {
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
    }
  });

settings.route('/companies')
  .get(async (req, res) => {
    const { companyId } = req.body;
    if (companyId) {
      const findCompUsSkill = await UserSkill.findOne({ where: { user_id: companyId } });
      const fCompanyAbout = await Company_about.findOne({ where: { user_id: companyId } });
      const fCompSkill = await Skill.findOne(
        { where: { id: findCompUsSkill.skill_id } },
      );
      res.json({ fCompanyAbout, fCompSkill });
    }
  })
  .post(async (req, res) => {
    const { companyData } = req.body;
    const {
      logo, companyName, location, skill, company_id,
    } = companyData;
    if (company_id) {
      const findCompanyAbout = await Company_about.findOne({ where: { user_id: company_id } });

      if (!findCompanyAbout) {
        const newCompAbout = await Company_about.create({
          logo,
          companyName,
          location,
          user_id: company_id,
        });

        const newCompSkill = await Skill.create({ name: skill });
        const newCompUserSkill = await UserSkill.create({
          skill_id: newCompSkill.id, user_id: company_id,
        });
        res.json({ newCompAbout, newCompSkill });
      } else {
        const updCompAbout = await Company_about.update({
          logo,
          companyName,
          location,
        }, { where: { user_id: company_id } });
        const findCompUsSkill = await UserSkill.findOne({ where: { user_id: company_id } });
        const updCompSkill = await Skill.update(
          { name: skill },
          { where: { id: findCompUsSkill.skill_id } },
        );
        const fCompanyAbout = await Company_about.findOne({ where: { user_id: company_id } });
        const fCompSkill = await Skill.findOne(
          { where: { id: findCompUsSkill.skill_id } },
        );
        res.json({ fCompanyAbout, fCompSkill });
      }
    }
  });

settings.route('/companies/:companyId')
  .get(async (req, res) => {
    const { companyId } = req.params;
    if (companyId) {
      console.log(companyId);
      const findCompUsSkill = await UserSkill.findOne({ where: { user_id: companyId } });
      console.log(findCompUsSkill);
      const fCompanyAbout = await Company_about.findOne({ where: { user_id: companyId } });
      if (findCompUsSkill) {
        const fCompSkill = await Skill.findOne(
          { where: { id: findCompUsSkill.skill_id } },
        );
        res.json({ fCompanyAbout, fCompSkill });
      } else {
        res.json({ errMessage: 'error with skillId' });
      }
    }
  });

module.exports = settings;
