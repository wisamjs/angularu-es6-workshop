'use strict';

import './noteMaker.scss';
import {NoteMakerController as controller} from './noteMaker.controller';
import template from './noteMaker.html';

let NoteMakerComponent = function(){
  return {
    restrict: 'E',
    template,
    controller,
    controllerAs: 'NoteMakerCtrl'
  };
};

export {NoteMakerComponent};