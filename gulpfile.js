const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));

gulp.task('minify-js', function () {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('compile-sass', function () {
  return gulp.src('src/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/*.js', gulp.series('minify-js'));
  gulp.watch('src/*.scss', gulp.series('compile-sass'));
});
