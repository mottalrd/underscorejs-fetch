module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jasmine : {
      src : 'lib/**/*.js',
      options: {
        specs : 'spec/**/*.js',
        vendor: 'vendor/**/*.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');


  // Default task.
  grunt.registerTask('default', 'jasmine');

};
