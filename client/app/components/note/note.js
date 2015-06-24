import angular from 'angular';
import {NoteComponent} from './note.component';

let NoteModule = angular.module('note', [])
.directive('note', NoteComponent);
export {NoteModule};