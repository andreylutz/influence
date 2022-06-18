const eventRouter = require('express').Router();
const { Event } = require('../db/models');

eventRouter.get('/', async (req, res) => {
  // const { user } = req.session;
  const events = await Event.findAll({
    order: [['date', 'DESC']],
    raw: true,
  });

  res.json({
    data: events,
  });
});

module.exports = eventRouter;
