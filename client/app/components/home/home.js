'use strict';
import angular from 'angular';
import template from './home.html';
import {HomeController as controller} from './controller';

let homeModule = angular.module('home', [])
  .directive('home', function () {
    return {template, controller};
  });


  export {homeModule};
