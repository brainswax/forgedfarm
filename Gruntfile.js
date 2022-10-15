module.exports = function(grunt) {
  grunt.initConfig({
    htmllint: {
      options: {
      },
      src: [
        '/*.html'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-htmllint');
  grunt.registerTask('default', ['htmllint']);
};
