'use strict';

module.exports = function( grunt ) {
  grunt.initConfig( {
    eslint: {
      options: {
        config: '.eslintrc'
      },
      src: ['./src/**/*.js', './tests/**/*.spec.js']
    },

    githooks: {
      all: {
        'pre-push': 'eslint'
      }
    }
  } );

  grunt.loadNpmTasks( 'grunt-githooks' );
  grunt.loadNpmTasks( 'grunt-contrib-eslint' );
  grunt.loadNpmTasks( 'gruntify-eslint' );
  grunt.registerTask( 'default', ['eslint'] );
};
