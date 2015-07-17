'use strict';

// var gulp = require('gulp');
// var sass = require('gulp-sass');
//
// gulp.task('sass', function () {
//   gulp.src('src/sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('src/css'));
// });
//
// gulp.task('watch', function () {
//   gulp.watch('src/sass/**/*.scss', ['sass']);
// });

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
