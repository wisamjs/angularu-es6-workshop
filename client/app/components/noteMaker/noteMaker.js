import angular from 'angular';
import {NoteMakerComponent} from './NoteMaker.component';

let NoteMakerModule = angular.module('noteMaker', ['core'])
.directive('noteMaker', NoteMakerComponent);

export {NoteMakerModule};