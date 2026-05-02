const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
  const note = { ...body, id: crypto.randomUUID() };

  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

function deleteNote(notesArray) {
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
}

module.exports = {
  deleteNote,
  createNewNote
  
  };
