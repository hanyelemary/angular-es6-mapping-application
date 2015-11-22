var gulp = require('gulp'),
    clean = require('rimraf'),
    dirs = 'bower_components';

gulp.task('clean', function() {
    clean(dirs, function(e) {
        if (e) {
            console.log(e);
        }
    });
});