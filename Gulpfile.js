/**
 * Created by Arun on 11/25/2015.
 */

var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var serve = require('gulp-webserver');

gulp.task('browserify', function(){
    var b = browserify();
    b.transform(reactify); // use the reactify transform
    b.add('./app/main.js');
    return b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('serve', function () {
    gulp.src('./')
        .pipe(
        serve({
            port: 8000,
            livereload: true,
            directoryListing: true
        })
    )
});

gulp.task('default', ['browserify','serve']);
