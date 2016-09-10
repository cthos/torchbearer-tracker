const elixir = require('laravel-elixir');
const gulp = require("gulp");
const ts = require("gulp-typescript");

gulp.task('default', ['compile-ts']);

gulp.task('compile-sass', function () {

});

gulp.task("compile-ts", function () {
    return gulp.src(['resources/assets/js/**/*.ts', 'typings/**/*.d.ts'])
        .pipe(ts({
          experimentalDecorators: true,
          out: 'app.js'
        }))
        .js.pipe(gulp.dest("public/js/"));
});

gulp.task('copy-node-modules', function () {
  const src = [
    'node_modules/{angular2,es6-shim,rxjs,systemjs}/**/*'
  ];

  return gulp.src(src)
    .pipe(gulp.dest('public/js/vendor'));
});