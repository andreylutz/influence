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
  const { name, description, location, picture, date } = req.body.data;
  const { user } = req.session;

  const event = await Event.create({
    name,
    description,
    location,
    picture,
    date,
    user_id: user.id,
  });

  res.json({ data: event });
});

// Remove Event
eventRouter.delete('/:id', async (req, res) => {
  const { id } = req.session.user;
  // console.log('Params ================>>>', req.params.id);
  const findEvent = await Event.findOne({ where: { id: req.params.id } });

  if (id === findEvent.user_id) {
    if (findEvent) {
      await findEvent.destroy();
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  }
  return res.status(401).end();
});

module.exports = eventRouter;
