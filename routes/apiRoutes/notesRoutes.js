const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db');

// *** Reply with all notes 
router.get('/notes', (req, res) => {
  res.json(notes);

});

router.post('/notes', (req, res) => {
  const note = createNewNote(req.body, notes);
  res.json(note);
});

router.delete('/notes/:id', function (req, res) {
  
  const { id } = req.params;
  const projectIndex = notes.findIndex(notes => notes.id == id);
  notes.splice(projectIndex, 1);
  deleteNote(notes);
  return res.send("Item Deleted!");

})

module.exports  = router;