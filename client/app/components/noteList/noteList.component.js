import './noteList.scss';
import {NoteListController as controller} from './noteList.controller';
import template from './noteList.html';
import angular from 'angular';

let NoteListComponent = () => {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller
  };
}

export {NoteListComponent};