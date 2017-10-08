const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const watch = require('gulp-watch');

const paths = {
  js: 'src/**/*.js',
  scss: 'src/**/index.scss',
  html: 'src/*.html',
  build: 'build'
};

gulp.task('script', () => {
  return gulp.src(paths.js)
    .pipe(babel({ presets: 'es2015' }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.build));
});

gulp.task('style', () => {
  return gulp.src(paths.scss)
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(gulp.dest(paths.build));
});

gulp.task('html', () => {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.build));
});

gulp.task('watch', function() {
  gulp.watch(paths.js, ['script']);
  gulp.watch(paths.scss, ['style']);
  gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['watch'], () => {

});