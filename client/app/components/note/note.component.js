import './note.scss';
import {NoteController as controller} from './note.controller';
import template from './note.html';
import angular from 'angular';

let NoteComponent= function(){
  return {
    restrict: 'E',
    template,
    controller
  };
}

export {NoteComponent};