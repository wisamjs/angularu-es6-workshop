'use strict';

import 'normalize.css';
import {HomeModule, NoteMakerModule} from './components/components';
import angular from 'angular';
angular.module('app',[ HomeModule.name, NoteMakerModule.name]);
