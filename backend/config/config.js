/* eslint-disable linebreak-style */
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const FileStore = require('session-file-store')(session);
const cors = require('cors');

const sessionConfig = {
  store: new FileStore(),
  name: 'sid',
  secret: process.env.SESSION_SECRET ?? 'influence',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
  },
};

const config = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
  app.use(cookieParser());
  app.use(session(sessionConfig));
};

module.exports = config;
