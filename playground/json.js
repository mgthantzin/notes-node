const fs = require('fs');

var originalNote = {
  title: 'Nostalgia',
  body: 'Green trees'
};

//fs.writeFileSync('data.json', JSON.stringify(originalNote));

var storedNoteString = fs.readFileSync('notes.json');
console.log(JSON.parse(storedNoteString).title);
