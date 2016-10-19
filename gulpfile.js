const elixir = require('laravel-elixir');
const gulp = require("gulp");
const ts = require("gulp-typescript");
const dbug = require("gulp-debug");
const concat = require("gulp-concat");
const sass = require("gulp-sass");

gulp.task('default', ['compile-ts', 'copy-templates', 'copy-libs']);

gulp.task('watch', function () {
  gulp.watch(['resources/assets/js/**/*.ts'], ['compile-ts']);
  gulp.watch(['resources/assets/js/**/*.html'], ['copy-templates']);
});

gulp.task('compile-sass', function () {
  gulp.src([
    'resources/assets/sass/**/*.scss'
  ])
  .pipe(sass())
  .pipe(concat('custom.css'))
  .pipe(gulp.dest('public/css/'));
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

gulp.task('copy-libs', function () {
  return gulp.src(['resources/libs/js/**/*.js'])
    .pipe(gulp.dest('public/js'));
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
    'node_modules/{@angular,reflect-metadata,rxjs,systemjs,zone.js,ng2-toastr}/**/*'
  ];

  return gulp.src(src)
    .pipe(gulp.dest('public/js/'));
});