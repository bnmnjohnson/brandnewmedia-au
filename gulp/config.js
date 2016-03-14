'use strict';

export default {

    browserPort: 3000,
    UIPort: 3001,

    sourceDir: './app/',
    buildDir: './build/',

    styles: {
        src: 'app/sass/**/*.scss',
        dest: 'build/css',
        prodSourcemap: false,
        sassIncludePaths: []
    },

    scripts: {
        src: 'app/js/vendor/*.js',
        dest: 'build/js'
    },

    videoScripts: {
        src: 'app/js/video/*.js',
        dest: 'build/js'
    },

    images: {
        src: 'app/images/**/*',
        dest: 'build/images'
    },

    fonts: {
        src: ['app/fonts/**/*'],
        dest: 'build/fonts'
    },

    assetExtensions: [
        'js',
        'css',
        'png',
        'jpe?g',
        'gif',
        'svg',
        'eot',
        'otf',
        'ttc',
        'ttf',
        'woff2?'
    ],

    views: {
        index: 'app/index.html',
        src: 'app/views/**/*.html',
        dest: 'app/js'
    },

    gzip: {
        src: 'build/**/*.{html,xml,json,css,js,js.map,css.map}',
        dest: 'build/',
        options: {}
    },

    browserify: {
        bundleName: 'main.js',
        prodSourcemap: false
    },

    test: {
        karma: 'test/karma.conf.js',
        protractor: 'test/protractor.conf.js'
    },

    paths: {
        siteUrl: "http://localhost/angular-wordpress-seed/build/",
        basePath: "/angular-wordpress-seed/build/",
        apiUrl: "http://localhost/wordpress/wp-json/"

    },
    DEFAULT_TITLE: 'Angular Wordpress Seed',

    DEFAULT_DESCRIPTION: 'A basic blog app demonstrating the use of AngularJS with the Wordpress API',


    init: function() {
        this.views.watch = [
            this.views.index,
            this.views.src
        ];

        return this;
    }

}.init();
