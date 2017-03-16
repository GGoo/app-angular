'use strict';
/**
 * `uglify`
 *
 * ---------------------------------------------------------------
 *
 * Minify client-side JavaScript files using UglifyJS.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {
    grunt.config.set('uglify', {
        dist: {
            src: [ './src/public/concat/production.js' ],
            dest: './src/public/min/production.min.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};
