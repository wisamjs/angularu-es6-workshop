'use strict';
import angular from 'angular';


//export pattern number 1  - doesn't reinforce naming
  /*export default angular.module('home', [])
  .directive('home'); */

let homeModule = angular.module('home', [])
  .directive('home', function () {
    return {};
  });


  export {homeModule};

