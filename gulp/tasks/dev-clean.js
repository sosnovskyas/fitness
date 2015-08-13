var gulp = require('gulp');
var config = require('../config').devClean;

var del = require('del');

return gulp.task('dev-clean', function (callback) {
    del([config.dest], callback);
});