'use strict';

import config from '../config';
import concat from 'gulp-concat';
import gulp from 'gulp';
import handleErrors from '../util/handleErrors';
import browserSync from 'browser-sync';

gulp.task('videoScripts', function() {

    return gulp.src(config.videoScripts.src)
        .pipe(concat('video.js'))
        .pipe(gulp.dest(config.videoScripts.dest))
        .pipe(browserSync.stream());

});
