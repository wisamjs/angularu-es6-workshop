import './noteList.scss';
import {NoteListController as controller} from './noteList.controller';
import template from './noteList.html';

let NoteListComponent = () => {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller
  };
};

export {NoteListComponent};