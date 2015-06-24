import angular from 'angular';
import {Notes} from './notes.factory';

let CoreModule = angular.module('core', [])
.factory('Notes', Notes);

export {CoreModule};