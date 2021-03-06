'use strict';

/**
 * `clean`
 *
 * ---------------------------------------------------------------
 *
 * Remove the files and folders in your Sails app's web root
 * (conventionally a hidden directory called `.tmp/public`).
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-clean
 *
 */

module.exports = function(grunt) {
    grunt.config.set('clean', {
        dev: [ './src/public/**' ],
        build: [ './src/public/**' ]
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
