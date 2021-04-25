var gulp         = require('gulp');
var plumber      = require("gulp-plumber");
var sass         = require('gulp-sass');

var paths = {
  'css'    : 'css/'
}

//Sass
var sassOptions = {
  outputStyle: 'compressed'//圧縮設定 nested, expanded, compact, compressed
}
gulp.task('sass', function (done) {
  gulp.src('scss/*.scss')
    .pipe(sass(sassOptions))
    .pipe(gulp.dest(paths.css));
  done();
});