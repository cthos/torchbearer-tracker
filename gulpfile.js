const elixir = require('laravel-elixir');
const gulp = require("gulp");
const ts = require("gulp-typescript");

gulp.task('default', ['compile-ts']);

gulp.task('compile-sass', function () {

});

gulp.task("compile-ts", function () {
    return gulp.src('resources/assets/js/**/*.ts')
        .pipe(ts({
            out: 'app.js'
        }))
        .js.pipe(gulp.dest("public/js/"));
});