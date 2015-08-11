var gulp = require('gulp');
var config = require('../config').devServer;

var webserver = require('gulp-webserver');

gulp.task('dev-server', function(){
    gulp.src(config.dest)
        .pipe(webserver({
            livereload: true,
            open: true
        }))
});
