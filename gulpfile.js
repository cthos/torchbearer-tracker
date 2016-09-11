const elixir = require('laravel-elixir');
const gulp = require("gulp");
const ts = require("gulp-typescript");
const dbug = require("gulp-debug");
const concat = require("gulp-concat");

gulp.task('default', ['compile-ts']);

gulp.task('compile-sass', function () {

});

gulp.task("compile-ts", function () {
    return gulp.src(['resources/assets/js/**/*.ts', 'typings/**/*.d.ts'])
      .pipe(dbug())
      .pipe(ts({
        experimentalDecorators: true,
        sortOutput: true
      }))
      .js
      .pipe()
      .pipe(gulp.dest("public/js/"));
});

gulp.task('copy-node-modules', function () {
  const src = [
    'node_modules/{@angular,reflect-metadata,rxjs,systemjs,zone.js}/**/*'
  ];

  return gulp.src(src)
    .pipe(gulp.dest('public/js/'));
});