var gulp = require('gulp');
var modernizr = require('gulp-modernizr');

gulp.task('modernizr', () => {
	return gulp.src([
			'./app/assets/styles/**/*.css',
			'./app/assets/scripts/**/*.js'
		])
		.pipe(modernizr(require('../../modernizr-config.json')))
		.pipe(gulp.dest('./app/temp/scripts/'));
});
