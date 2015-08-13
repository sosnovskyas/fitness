var gulp = require('gulp');
var config = require('../config').devCssVendor;

var sourcemaps = require('gulp-sourcemaps');
var scss = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var browserSync  = require('browser-sync');
var uncss = require('gulp-uncss');

gulp.task('dev-css', function () {
    return gulp.src(config.src)
        .pipe(concat(config.concatFile))
        // .pipe(uncss({
        //    html: ['/**/*.html', 'http://example.com']
        // }))
        .pipe(gulp.dest(config.dest))

        .pipe(browserSync.reload({stream:true}));
});
