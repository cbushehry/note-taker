const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db');

// *** Reply with all notes 
router.get('/notes', (req, res) => {
  res.json(notes);

});

// *** Create a new note post fetch originated from client facing applicatoin
router.post('/notes', (req, res) => {

  // *** Placeholder ID creation to modify the body with one more element before "real" key is assigned.
  req.body.id = notes.length.toString();
 
  // *** note will hold the reply of the new array of notes --> JSON.stringify({ notes: notesArray }, null, 2)
  const note = createNewNote(req.body, notes);
  // *** respond with the json note for client facing application to complete the delete of the element from the front end.
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