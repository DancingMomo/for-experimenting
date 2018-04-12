var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', () => {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', () => {
    browserSync.reload();
  });

  watch('./app/assets/scripts/**/*.js', () => {
      gulp.start('refreshScripts');
  });

  watch('./app/assets/styles/**/*.css', () => {
     gulp.start('injectCss');
  });

});

gulp.task('refreshScripts', ['scripts'], () => {
    browserSync.reload();
});

gulp.task('injectCss', ['styles'], () => {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
