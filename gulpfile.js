'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var ejs = require("gulp-ejs");
var browserSync = require('browser-sync');

var config = {
  server: {
    open: 'external',
    port: 8000,
    server: {
      baseDir: './app/',
      index: 'index.html'
    },
    notify: false,
    ghostMode: false
  }
}

//server
gulp.task('server', (done) => {
  browserSync(config.server);
  done();
});

//sassのコンパイル
var sassOptions = {
  outputStyle: 'nested'//圧縮設定 nested, expanded, compact, compressed
}
gulp.task('sass', (done) => {
  gulp
    .src('./app/scss/*.scss')
    .pipe(sass(sassOptions))
    .pipe(gulp.dest('./app/css/'));
  done();
});

//ejsのコンパイル
gulp.task('ejs', (done) => {
  gulp
    .src(['./app/ejs/**/*.ejs', '!' + 'ejs/**/_*.ejs'])
    .pipe(ejs({}, {}, {ext:'.html'}))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('./app/'));
  done();
});

//リロード
gulp.task('browser-reload', (done) => {
  browserSync.reload();
  done();
});

//watch
gulp.task('watch', () => {
  browserSync(config.server);
  gulp.watch('./app/scss/**/*.scss', gulp.series(['sass','browser-reload']));
  gulp.watch('./app/ejs/**/*.ejs', gulp.series(['ejs','browser-reload']));
});
