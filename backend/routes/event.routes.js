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
eventRouter.post('/new', async (req, res) => {
  const { event_name, location, date } = req.body;
  const { user } = req.session;

  const parties = await Event.create({ event_name, location, date, user_id: user.id });
  try {
    await parties.save();
    res.redirect('/parties');
  } catch (err) {
    res.status(401).end();
  }
});

module.exports = eventRouter;
