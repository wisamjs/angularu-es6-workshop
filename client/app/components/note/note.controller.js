'use strict';
var vm = this;

class Note{
  constructor(NotesFactory){
    vm.NotesFactory = NotesFactory;

  }
  createNote(content){
    vm.NotesFactory.createNote(content);
  },
  getOneNote(id){
    return vm.NotesFactory.getOneNote(id);
  },
  getAllNotes(){
    return vm.Notes.getAllNotes();

  }
}

Note.$inject = ['Notes'];

export {Note};