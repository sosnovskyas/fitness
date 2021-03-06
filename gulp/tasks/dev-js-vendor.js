var gulp = require('gulp');
var config = require('../config').devJsVendor;

var concat = require('gulp-concat');
var changed    = require('gulp-changed');
var browserSync  = require('browser-sync');

// developer JS
gulp.task('dev-js-vendor', function () {
    return gulp.src(config.src)
        .pipe(changed(config.dest)) // Ignore unchanged files
        .pipe(concat(config.concatFile))
        .pipe(gulp.dest(config.dest))

        .pipe(browserSync.reload({stream: true}));
});