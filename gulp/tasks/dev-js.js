var gulp = require('gulp');
var config = require('../config').devJs;

var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var jscs = require('gulp-jscs');
var browserSync  = require('browser-sync');

// developer JS
gulp.task('dev-js', function () {
    // vendor libtrarys
    gulp.src([
        'bower/jquery/dist/jquery.js',
        'bower/angular/angular.js',
        'bower/firebase/firebase.js',
        'bower/angularfire/dist/angularfire.js',
        'bower/angular-ui-router/release/angular-ui-router.js',
        'bower/angular-roure/angular-roure.js',
        'bower/bootstrap/dist/js/bootstrap.js',
        'bower/firebase-simple-login/firebase-simple-login.js'
    ])
        .pipe(jscs({
            fix: true
        }))
        .pipe(concat('lib.js'))
        .pipe(gulp.dest(config.dest));

    // custom scripts
    gulp.src([config.src])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest(config.dest))

        .pipe(browserSync.reload({stream: true}));
});