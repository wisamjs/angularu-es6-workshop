import angular from 'angular';
import {NoteListComponent} from './noteList.component';

let NoteListModule = angular.module('noteList', ['core'])
.directive('noteList', NoteListComponent);
export {NoteListModule};