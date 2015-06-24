'use strict';

import 'normalize.css';
import {
  HomeModule,
  NoteMakerModule,
  NoteListModule,
  NoteModule,
  CoreModule,
} from './components/components';
import angular from 'angular';

angular.module('app', [
  CoreModule.name,
  HomeModule.name,
  NoteMakerModule.name,
  NoteListModule.name,
  NoteModule.name
  ]);
