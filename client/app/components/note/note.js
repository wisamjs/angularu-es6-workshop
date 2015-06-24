import angular from 'angular';
import {NoteComponent} from './Note.component';

let NoteModule = angular.module('note', [])
.directive('note', NoteComponent);

export {NoteModule};