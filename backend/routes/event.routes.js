const eventRouter = require('express').Router();
const { Event } = require('../db/models');

// All Events
eventRouter.get('/', async (req, res) => {
  const events = await Event.findAll({
    order: [['date', 'DESC']],
    raw: true,
  });

  res.json({ data: events });
});

// All Events User
eventRouter.get('/my', async (req, res) => {
  const { user } = req.session;

  const events = await Event.findAll({
    order: [['date', 'DESC']],
    where: {
      user_id: user.id,
    },
    raw: true,
  });

  res.json({ data: events });
});

// Add Event
eventRouter.post('/new', async (req) => {
  const { name, description, location, date } = req.body.data;
  const { user } = req.session;

  await Event.create({
    name,
    description,
    location,
    date,
    user_id: user.id,
  });
});

module.exports = eventRouter;
