const eventRouter = require('express').Router();
const { Event } = require('../db/models');
const { User } = require('../db/models');

// All Events
eventRouter.get('/', async (req, res) => {
  const events = await Event.findAll({
    order: [['date', 'DESC']],
    raw: true,
  });

  res.json({ data: events });
});

// All Events User
eventRouter.get('/', async (req, res) => {
  const { user } = req.session;
  const events = await Event.findAll({
    order: [['date', 'DESC']],
    where: {
      user_id: user.id,
    },
    raw: true,
    include: User,
  });

  res.json({ data: events });
});

module.exports = eventRouter;
