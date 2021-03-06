'use strict';

/**
 * `concat`
 *
 * ---------------------------------------------------------------
 *
 * Concatenates the contents of multiple JavaScript and/or CSS files
 * into two new files, each located at `concat/production.js` and
 * `concat/production.css` respectively in `.tmp/public/concat`.
 *
 * This is used as an intermediate step to generate monolithic files
 * that can then be passed in to `uglify` and/or `cssmin` for minification.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-concat
 *
 */

var pipeline = require('../pipeline');

module.exports = function(grunt) {
    grunt.config.set('concat', {
        js: {
            src: pipeline.jsFilesToInject,
            dest: './src/public/concat/production.js'
        },
        css: {
            src: pipeline.cssFilesToInject,
            dest: './src/public/concat/production.css'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};
