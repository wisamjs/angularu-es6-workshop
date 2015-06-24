'use strict';

import 'normalize.css';
import {
  HomeModule,
  NoteMakerModule,
  NoteListModule
} from './components/components';
import angular from 'angular';

angular.module('app', [
  HomeModule.name,
  NoteMakerModule.name,
  NoteListModule.name
  ]);
