'use strict';

import angular from 'angular';
import {HomeComponent} from './home.component';

let HomeModule = angular.module('home', [])
  .directive('home', HomeComponent );


  export {HomeModule};
