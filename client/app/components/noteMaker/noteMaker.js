import angular from 'angular';
import {NoteMakerComponent} from './NoteMaker.component';

let NoteMakerModule = angular.module('noteMaker', [])
.directive('noteMaker', NoteMakerComponent);

export {NoteMakerModule};