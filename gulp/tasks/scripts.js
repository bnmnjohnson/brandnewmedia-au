'use strict';

import config from '../config';
import concat from 'gulp-concat';
import gulp from 'gulp';
import handleErrors from '../util/handleErrors';
import browserSync from 'browser-sync';

gulp.task('scripts', function() {

    return gulp.src(config.scripts.src)
        .pipe(concat('all.js'))
        .pipe(gulp.dest(config.scripts.dest))
        .pipe(browserSync.stream());

});
