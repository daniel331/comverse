module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! I am Ugly! */\n',
				compress: true,
				mangle: true,
				sourceMap: true
			},
			target: {
				src: 'src/js/main.js',
				dest: 'dist/js/main.min.js'
			}
		}
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Default task
	grunt.registerTask('default', ['uglify']);
};