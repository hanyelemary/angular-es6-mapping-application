var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    basePath = './src/main/resources/static/javascript/';

function build() {
    const bundler = browserify({
        entries: [
            basePath + 'map/map.service.js',
            basePath + 'map/map.js',
            basePath + 'agents.controller.js',
            basePath + 'agents.service.js',
            basePath + 'app.js'
        ],
        debug: true,
        transform: [babelify]
    });

    return bundler.bundle()
        .pipe(source('./bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(basePath + './dist'));
}

gulp.task('babelify', build);