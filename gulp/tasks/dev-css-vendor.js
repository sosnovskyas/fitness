var gulp = require('gulp');
var config = require('../config').devCssVendor;

var sourcemaps = require('gulp-sourcemaps');
var scss = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var browserSync  = require('browser-sync');
var uncss = require('gulp-uncss');
var changed    = require('gulp-changed');

gulp.task('dev-css-vendor', function () {
    return gulp.src(config.src)
        .pipe(changed(config.dest)) // Ignore unchanged files
        .pipe(concat('lib.css'))
        // .pipe(uncss({
        //    html: ['/**/*.html', 'http://example.com']
        // }))
        .pipe(gulp.dest(config.dest))

        .pipe(browserSync.reload({stream:true}));
});
