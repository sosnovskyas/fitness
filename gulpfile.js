'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var scss = require('gulp-sass');
var jade = require('gulp-jade');
var webserver = require('gulp-webserver');


// developer JS
gulp.task('djs',function(){
    // vendor libtrarys
    gulp.src([
        'bower/jquery/dist/jquery.js',
        'bower/angular/angular.js',
        'bower/angular-ui-router/release/angular-ui-router.js',
        'bower/angular-roure/angular-roure.js',
        'bower/bootstrap/dist/js/bootstrap.js'
    ])
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('builds/dev'));

    // custom scripts
    gulp.src(['app/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('builds/dev'));
});

//developer CSS
gulp.task('dcss',function(){
    gulp.src(['app/**/*.scss'])
        .pipe(scss())
        .pipe(concat('app.css'))
        //autoprefixer
        .pipe(gulp.dest('builds/dev'));

    gulp.src([
        'bower/bootstrap/dist/css/bootstrap.css',
        'bower/bootstrap/dist/css/bootstrap-theme.css'
    ])
        .pipe(concat('lib.css'))
        .pipe(gulp.dest('builds/dev'));

});

//developer WATCH
gulp.task('dwatch', function(){
    gulp.watch('app/**/*.js',['djs']);
    gulp.watch('app/**/*.scss',['dcss']);
    gulp.watch('app/**/*.jade',['djade']);
});

//developer JADE
gulp.task('djade', function() {
    var YOUR_LOCALS = {};
    gulp.src([
        'app/**/*.jade'
    ])
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: true
        }))
        .on('error', console.log)
        .pipe(gulp.dest('builds/dev'));
});

//develpoer IMG
gulp.task('dimg', function() {
    gulp.src('app/img/*')
        .pipe(gulp.dest('builds/dev/i'));
});

//developer WEBSERVER
gulp.task('dwebserver', function(){
    gulp.src('builds/dev')
        .pipe(webserver({
            livereload: true,
            open: true
        }))
});

// DEFAULT TASK
gulp.task('default',[
    'dev'
]);

// developer build
gulp.task('dev',[
    'djs',
    'dcss',
    'djade',
    //'dhtml',
    'dimg',
    'dwatch',
    'dwebserver'
]);

//production build
gulp.task('prod',[
    'pjs'
]);

