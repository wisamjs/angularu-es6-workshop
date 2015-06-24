'use strict';

var gulp = require('gulkp');
var webpack = require('gulp-webpack');
var serve = require('browser-sync');

gulp.task('build',function(){
  return gulp
    .src('client/app/app.js')
    .pipe(webpack(require('webpack.config')))
    .pipe(gulp.dest('client'));

});