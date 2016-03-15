'use strict';

import config from '../config';
import concat from 'gulp-concat';
import gulp from 'gulp';
import handleErrors from '../util/handleErrors';
import browserSync from 'browser-sync';

gulp.task('masonryScripts', function() {

    return gulp.src(config.masonryScripts.src)
        .pipe(concat('masonry.js'))
        .pipe(gulp.dest(config.masonryScripts.dest))
        .pipe(browserSync.stream());

});
