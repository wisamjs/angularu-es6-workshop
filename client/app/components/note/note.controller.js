class NoteController{
  constructor(Notes){
    this.note = this.noteData();
  }

}

NoteController.$inject = ['Notes'];

export {NoteController};