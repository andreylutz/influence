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
  .get(async (req, res) => {
    const { companyId: userId } = req.body;
    if (userId) {
      const findUserSkill = await UserSkill.findOne({ where: { user_id: userId } });
      const fUserAbout = await Company_about.findOne({ where: { user_id: userId } });
      const fUserSkill = await Skill.findOne(
        { where: { id: findUserSkill.skill_id } },
      );
      res.json({ fUserAbout, fUserSkill });
    }
  })
  .post(async (req, res) => {
    const { userData } = req.body;
    const {
      avatar, userName, surname, age, location, skill, userId,
    } = userData;
    if (userId) {
      const findUserAbout = await User_about.findOne({ where: { user_id: userId } });

      if (!findUserAbout) {
        const fUserAbout = await User_about.create({
          avatar,
          name: userName,
          surname,
          age,
          location,
          user_id: userId,
        });

        const fUserSkill = await Skill.create({ name: skill });
        const fUserUserSkill = await UserSkill.create({ skill_id: fUserSkill.id, user_id: userId });

        res.json({ fUserAbout, fUserSkill });
      } else {
        const updUserAbout = await User_about.update({
          avatar,
          name: userName,
          surname,
          age,
          location,
        }, { where: { user_id: userId } });
        const fUserUserSkill = await UserSkill.findOne({ where: { user_id: userId } });
        const updUserSkill = await Skill.update(
          { name: skill },
          { where: { id: fUserUserSkill.skill_id } },
        );
        const fUserAbout = await User_about.findOne({ where: { user_id: userId } });
        const fUserSkill = await Skill.findOne(
          { where: { id: fUserUserSkill.skill_id } },
        );
        res.json({ fUserAbout, fUserSkill });
      }
    }
  });

settings.route('/users/:userId')
  .get(async (req, res) => {
    const { userId } = req.params;
    if (userId) {
      const fUserUserSkill = await UserSkill.findOne({ where: { user_id: userId } });
      const fUserAbout = await User_about.findOne({ where: { user_id: userId } });
      if (fUserUserSkill) {
        const fUserSkill = await Skill.findOne(
          { where: { id: fUserUserSkill.skill_id } },
        );
        res.json({ fUserAbout, fUserSkill });
      } else {
        res.json({ errMessage: 'error with skillId' });
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
        const fCompanyAbout = await Company_about.create({
          logo,
          companyName,
          location,
          user_id: company_id,
        });

        const fCompSkill = await Skill.create({ name: skill });
        const newCompUserSkill = await UserSkill.create({
          skill_id: fCompSkill.id, user_id: company_id,
        });
        res.json({ fCompanyAbout, fCompSkill });
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
