import angular from 'angular';
import {NoteListComponent} from './noteList.component';
import {Notes} from './noteList.factory';

let NoteListModule = angular.module('noteList', [])
.directive('noteList', NoteListComponent)
.factory('Notes', Notes);

export {NoteListModule};