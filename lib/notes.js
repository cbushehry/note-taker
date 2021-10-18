const fs = require("fs");
const path = require("path");

var KeyGenerator = require('uuid-key-generator');
 
function createNewNote(body, notesArray) {
  const note = body;

  var keygen = new KeyGenerator(); 
  
  body.id = keygen.generateKey();

  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

function deleteNote(notesArray) {
  console.log(notesArray);
  console.log(body);
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );

}

module.exports = {
  deleteNote,
  createNewNote
  
  };
