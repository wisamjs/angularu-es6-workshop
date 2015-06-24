'use strict';

class NoteMakerController{
  constructor(Notes){
    this.newNote = 'Enter here!';
    this.Notes = Notes;

  }

  addNote(){
    this.Notes.createNote(this.newNote);
  }


}

NoteMakerController.$inject = ['Notes'];

export {NoteMakerController};