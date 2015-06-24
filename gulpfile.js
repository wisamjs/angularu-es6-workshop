'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var serve = require('browser-sync');
var sync = require('run-sequence');

var paths = {
  app: ['client/app/**/*.js']
}

gulp.task('build',function() {
  return gulp
    .src('client/app/app.js')
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest('client'));

});

gulp.task('serve', function() {
  serve({
    port: 4500,
    open: true,
    server: {
      baseDir: 'client'
    }

  });
});

gulp.task('watch', function() {
  gulp.watch(paths.app, ['build', serve.reload]);

});

gulp.task('dev', function (done) {
  sync('build', 'serve', 'watch', done);

});