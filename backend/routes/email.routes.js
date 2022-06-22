const emailRouter = require('express').Router();
const mailer = require('../config/nodemailer');
const { Key } = require('../db/models');

emailRouter.route('/')
  .post(async (req, res) => {
    const { FrendsEmail, uniKey, mainEmail } = req.body;

    await Key.create({
      uniquekey: uniKey,
    });
    // const maillist = `${FrendsEmail}`;

    const message = {
      to: `${FrendsEmail}`,
      subject: `Приглашение в INFLUENCE от ${mainEmail}.`,
      html: `
        <h2>Добро пожаловать в INFLUENCE!</h2>
        
        <p>Для успешной регистрации используйте уникальный ключ:</p>
        <h3>${uniKey}</h3>

        <p>Данное письмо не требует ответа.</p>`,
    };
    mailer(message);
    res
      .status(200);
  });

module.exports = emailRouter;
