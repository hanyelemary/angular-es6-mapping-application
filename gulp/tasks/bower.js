
var gulp = require('gulp'),
    bower = require('gulp-bower'),
    config = require('../config.js');

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.basePath + '/bower_components'));
});