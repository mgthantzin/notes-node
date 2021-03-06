const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

var argv = yargs.argv;
var command = argv._[0];
//console.log('Command: ', command);
//console.log('Process', process.argv);
//console.log('Yargs', argv);

if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log('Note created');
    notes.logNote(note);
  }else{
    console.log('Note title taken');
  }
} else if (command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Total ${allNotes.length} notes`);
  allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read'){
  var note = notes.getNote(argv.title);
  if(note){
    notes.logNote(note);
  }else{
    console.log('Note not found');
  }
} else if (command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note removed" : "Note not found";
  console.log(message);
} else {
  console.log('Command not recognized');
}
