"use strict";
var gulp = require('gulp');
var jsHint = require('gulp-jshint');
var jsHintStyle = require('jshint-stylish');
var minify = require('gulp-minify');
// var nodemon = require('gulp-nodemon');
// var mocha = require('gulp-mocha');
// var istanbul = require('gulp-istanbul');
var webpack = require("gulp-webpack");

gulp.task('default', ['lint','build','minify']);

// gulp.task('pre-test', function () {
//   return gulp.src(['lib/**/*.js'])
//     // Covering files
//     .pipe(istanbul())
//     // Force `require` to return covered files
//     .pipe(istanbul.hookRequire());
// });

// Run unit tests
// gulp.task('test', ['pre-test'], function () {
//   return gulp.src(['test/*.js'])
//     .pipe(mocha())
//     // Creating the reports after tests ran
//     .pipe(istanbul.writeReports())
//     // Enforce a coverage of at least 90%
//     .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
// });

// jsHint 
gulp.task('lint', function(){
  return gulp.src(['*.js'])
  .pipe(jsHint())
  .pipe(jsHint.reporter(jsHintStyle));
});

// jsMinify
gulp.task('minify', function() {
  gulp.src('./dist/*.js')
  .pipe(minify({
    ext:{
      min:'-min.js'
    },
    noSource: true,
    output:{
      ascii_only: true
    },
    ignoreFiles: ['-min.js']
  }))
  .pipe(gulp.dest('./dist'));
});

// Start the server on development
// gulp.task('serve', function () {
//   nodemon({ script: 'app.js', tasks: ['lint'] })
//   .on('restart', function () {
//     console.log('restarted!!!');
//   });
// });

gulp.task('build', function () {
  return gulp.src('./flutterwave_src.js')
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(gulp.dest('dist/'));
});
