/* eslint-disable linebreak-style */
/* eslint-disable indent */
require('dotenv').config();
const express = require('express');

const app = express();
const mainConfig = require('./config/config');

const mainRoute = require('./routes/main.router');

const { sequelize } = require('./db/models');

const PORT = process.env.PORT ?? 4000;

mainConfig(app);

app.use('/', mainRoute);

app.listen(PORT, async () => {
  console.log('Веб-сервер слушает порт', PORT);

  try {
    await sequelize.authenticate();
    console.log('БД-сервер подключен успешно');
  } catch (error) {
    console.log('БД-сервер не подключен');
    console.log(error.message);
  }
});
