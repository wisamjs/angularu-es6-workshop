'use strict';
import './home.css';
import angular from 'angular';
import template from './home.html';
import {HomeController as controller} from './controller';

let homeModule = angular.module('home', [])
  .directive('home', function () {
    return {template, controller, restrict: 'E'};
  });


  export {homeModule};
