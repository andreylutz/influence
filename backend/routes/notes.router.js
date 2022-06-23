const notesRouter = require('express').Router();
const { Note } = require('../db/models');

notesRouter.post('/', async (req, res) => {
  const { us } = req.body;
  const { textarea } = req.body;
  const { header } = req.body;
  const note = await Note.create({ title: header, description: textarea, user_id: us });
  res.json(note);
});

notesRouter.get('/', async (req, res) => {
  // const { us } = req.body;
  const resNote = await Note.findAll({ where: { user_id: req.session.user.id } });
  res.json(resNote);
});

notesRouter.delete('/:id', async (req, res) => {
  // const { us } = req.body;
  const noteId = Number(req.params.id);
  // console.log(noteId);
  // console.log(typeof req.session.user.id);
  const findNote = await Note.findOne({ where: { id: noteId } });

  if (Number(req.session.user.id) === Number(findNote.user_id)) {
    await findNote.destroy();
  }
  res.json(noteId);
});

module.exports = notesRouter;
