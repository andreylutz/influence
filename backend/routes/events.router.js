const eventsRouter = require('express').Router();

eventsRouter.get('/', async (req, res) => {
  const { user } = req.session;
  const parties = await Party.findAll({
    order: [['date', 'DESC']],
    raw: true,
    include: User,
  });

  const main = React.createElement(Home, { user, parties });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = eventsRouter;
