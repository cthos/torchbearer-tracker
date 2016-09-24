const elixir = require('laravel-elixir');
const gulp = require("gulp");
const ts = require("gulp-typescript");
const dbug = require("gulp-debug");
const concat = require("gulp-concat");

gulp.task('default', ['compile-ts', 'copy-templates']);

gulp.task('watch', function () {
  gulp.watch(['resources/assets/js/**/*.ts'], ['compile-ts']);
  gulp.watch(['resources/assets/js/**/*.html'], ['copy-templates']);
});

gulp.task('compile-sass', function () {

});

gulp.task("compile-ts", function () {
    return gulp.src(['resources/assets/js/**/*.ts', 'typings/**/*.d.ts'])
      .pipe(ts({
        experimentalDecorators: true,
        sortOutput: true,
        target: 'es5'
      }))
      .js
      .pipe(gulp.dest("public/js/"));
});

gulp.task("copy-templates", function () {
  return gulp.src(['resources/assets/js/**/*.html'])
    .pipe(gulp.dest('public/js'));
});

gulp.task('copy-css-framework', function () {
  const src = [
    'node_modules/bulma/css/bulma.css'
  ];

  return gulp.src(src)
    .pipe(gulp.dest('public/css/'));
});

gulp.task('copy-node-modules', function () {
  const src = [
    'node_modules/{@angular,reflect-metadata,rxjs,systemjs,zone.js}/**/*'
  ];

  return gulp.src(src)
    .pipe(gulp.dest('public/js/'));
});