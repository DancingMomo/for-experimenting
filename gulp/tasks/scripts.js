var gulp = require('gulp');
var webpack = require('webpack');

gulp.task('scripts', ['modernizr'], (callback) => {
	webpack(require('../../webpack.config.js'), (err, stats) => {
		if (err) {
			console.log('WEBPACK ERROR:');
			console.log(err.toString());
		}
		console.log(stats.toString());
		callback();
	});
});
