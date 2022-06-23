const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true, // true for 465, false for other ports
    // Пожалуйста, используйте свой собственный gmail аккаунт для рассылки
    auth: {
      user: process.env.SMTP_TO_EMAIL,
      pass: process.env.SMTP_TO_PASSWORD,
    },
  },
  {
    from: 'Mailer Test <testZxcCxz1@yandex.ru>', // (замените звездочики на название вашего почтового ящика gmail)
  },
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log('Email sent: ', info);
  });
};

module.exports = mailer;
