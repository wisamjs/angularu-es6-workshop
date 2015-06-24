import './note.scss';
import {NoteController as controller} from './note.controller';
import template from './note.html';

let NoteComponent = () => {
  return {
    restrict: 'E',
    scope: {
      noteData: '&'
    },
    template,
    controller,
    controllerAs: 'NoteCtrl',
    bindToController: true
  };
};

export {NoteComponent};