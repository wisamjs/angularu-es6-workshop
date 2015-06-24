import _ from 'lodash';
let count = 0;

let Notes = () => {
  const notes = [];

  let getAllNotes = () => {
    return notes;
  };

  let getOneNote = (id) => {
    return _.find(notes, {id});
  };

  let createNote = (content) => {
    console.log(content);
    let note = {content, id: ++count};
    notes.push(note);
  };

  return {
    getAllNotes,
    getOneNote,
    createNote
  };
};

export {Notes};