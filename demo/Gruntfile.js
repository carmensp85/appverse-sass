/*jshint node:true */
'use strict';

module.exports = function (grunt) {
    //Load all .js tasks definitions at tasks folder
    grunt.loadTasks('./tasks');
    grunt.loadNpmTasks('grunt-jscs');
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-contrib-compress');

    var options = {
        appName: require('./package.json').name,
        // Project settings
        paths: {
            // Configurable paths
            app: 'app',
            dist: 'dist/web',
            server: 'server',
            doc: 'doc'
        },
        ports: {
            app: '9000',
            dist: '9001',
            doc: '9002',
            test: '9003',
            livereload: '35729'
        }
    };

    // Load grunt configurations automatically at config folder
    var configs = require('load-grunt-configs')(grunt, options);

    // Define the configuration for all the tasks
    grunt.initConfig(configs);

    grunt.registerTask('default', [
        'server'
    ]);

};
