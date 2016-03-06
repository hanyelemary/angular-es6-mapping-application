var gulp = require('gulp'),
    clean = require('rimraf'),
    config = require('../config'),
    dirs = 'bower_components';

gulp.task('clean', function() {
    clean(config.basePath + dirs, function(e) {
        if (e) {
            console.log(e);
        }
    });
});