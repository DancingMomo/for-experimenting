var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');
var hexRgba = require('postcss-hexrgba');

gulp.task('styles', function () {
	let srcAddr = './app/assets/styles/styles.css';
	let destAddr = './app/temp/styles';
	console.log(`Task Styles: Creating batch styles file in ${destAddr}`);

	return gulp.src(srcAddr)
		.pipe(postcss([cssImport, mixins, cssvars, nested, hexRgba, autoprefixer]))
		.on('error', function (errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest(destAddr));
});
