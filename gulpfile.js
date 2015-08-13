var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('browser-sync', function() {

    browserSync.init({
        server: "./src"
    });
    gulp.watch("src/**/*.*").on('change', browserSync.reload);
});