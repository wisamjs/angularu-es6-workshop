'use strict';

import 'normalize.css';
import {homeModule} from './components/components';
import angular from 'angular';

angular.module('app',[ homeModule.name]);
