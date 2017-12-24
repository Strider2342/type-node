var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var nodemon = require('nodemon');
var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();
gulp.task('ts-lint', function() {
  return gulp.src(config.allTs);
});

gulp.task('compile-ts', function() {
  var sourceTsFiles = [
    config.allTs,
    config.typings
  ];

  var tsResult = gulp
    .src(sourceTsFiles)
    .pipe(sourcemaps.init())
    .pipe(tsc());

  return tsResult.js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.tsOutPath));
});

gulp.task('build.dev', function() {
  gulp.start('compile-ts');
  gulp.watch(config.allTs, [ 'compile-ts' ])
});
