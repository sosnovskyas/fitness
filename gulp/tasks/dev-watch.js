var gulp = require('gulp');
var config = require('../config').devWatch;

gulp.task('dev-watch', function(){
    gulp.watch('src/**/*.js',['dev-js']);
    gulp.watch('src/**/*.scss',['dev-css']);
    gulp.watch('src/**/*.jade',['dev-markup']);
});


