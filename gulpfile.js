'use strict';

// var gulp        = require('gulp');
// // var browserSync = require('browser-sync').create();
// var sass        = require('gulp-sass');
// var livereload = require('gulp-livereload');

var gulp = require('gulp'),
    less = require('gulp-sass'),
    livereload = require('gulp-livereload');

// gulp.task('serve', ['sass'], function() {
//
//     browserSync.init({
//         server: "./src"
//     });
//
//     gulp.watch("src/sass/*.scss", ['sass']);
//     gulp.watch("src/**/*.*").on('change', browserSync.reload);
// });
//
// // Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//     return gulp.src("src/sass/*.scss")
//         .pipe(sass())
//         .pipe(gulp.dest("src/css"))
//         .pipe(browserSync.stream());
// });
//
// gulp.task('default', ['serve']);
gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
    .pipe(livereload());
});

gulp.task('default', function () {
  livereload.listen(".src/**/*.*");
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});


// var gulp = require('gulp'),
//     less = require('gulp-less'),
//     livereload = require('gulp-livereload');

// gulp.task('less', function() {
//   gulp.src('less/*.less')
//     .pipe(less())
//     .pipe(gulp.dest('css'))
//     .pipe(livereload());
// });

// gulp.task('watch', function() {
//   livereload.listen();
//   gulp.watch('less/*.less', ['less']);
// });
