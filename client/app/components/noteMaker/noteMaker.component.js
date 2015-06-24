import './noteMaker.scss';
import {NoteMakerController as controller} from './noteMaker.controller';
import template from './noteMaker.html';
import angular from 'angular';

let NoteMakerComponent= function(){
  return {
    restrict: 'E',
    template,
    controller
  };
}

export {NoteMakerComponent};