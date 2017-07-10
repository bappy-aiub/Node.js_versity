console.log('Starting note.js');

var addNote = function(title, body) {
  console.log('Adding note', title, body);
}
var getAll = function() {
  console.log('Getting all lists');
}

module.exports = {
  addNote,
  getAll
}
