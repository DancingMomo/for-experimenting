var gulp = require('gulp');
var del = require('del');
var usemin = require('gulp-usemin');
var imagemin = require('gulp-imagemin');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('previewDist', () => {
    browserSync.init({
      notify: false,
      server: {
        baseDir: "docs"
      }
    });
});

gulp.task('build', ['build_beginClean', 'build_copyGeneralFiles', 'build_optimizeImages', 'build_usemin']);

gulp.task('build_beginClean', () => {
    return del('./docs');
});

gulp.task('build_copyGeneralFiles', ['build_beginClean'], () => {
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**'
    ];
    return gulp.src(pathsToCopy)
    .pipe(gulp.dest('./docs'));
});

gulp.task('build_optimizeImages', ['build_beginClean'], () => {
    return gulp.src([
        "./app/assets/images/**/*",
        "!./app/assets/images/working",
        "!./app/assets/images/working/**",
        "!./app/assets/images/icons", // exclude!
        "!./app/assets/images/icons/**/*" // exclude!
    ])
    .pipe(imagemin({
        progressive: true, // optimize jpg
        interlaced: true, // optimize gif
        multipass: true  // optimize svg
    }))
    .pipe(gulp.dest("./docs/assets/images"));
});


gulp.task('build_usemin', ['build_beginClean', 'styles', 'scripts'], () => {
    return gulp.src("./app/index.html")
    .pipe(usemin({
        css: [
            () => {
                return rev();
            },
            () => {
                return cssnano();
            }
        ],
        js: [
            () => {
                return rev();
            },
            () => {
                return uglify();
            }
        ]
    }))
    .pipe(gulp.dest("./docs"));
});
