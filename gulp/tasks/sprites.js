var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var del = require('del');
var svg2png = require('gulp-svg2png');

var iconConfig = {
    shape: {
        spacing: {
            padding: 1
        }
    },
    mode: {
        css: {
            variables: {
                replaceSvgWithPng: () => {
                    return (sprite, render) => {
                        return render(sprite).split('.svg').join('.png');
                    }
                }
            },
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/icon.css'
                }
            }
        }
    }
}

gulp.task('sprites', ['sprites_beginClean', 'sprites_createIcons', 'sprites_createPngCopy', 'sprites_copyGraphic', 'sprites_copyIconCss', 'sprites_endClean']);


/* TASK: Begin Clean
--Delete existing sprites
    (Why?
    The sprite file is generated with a unique name each time
    and the previous file is not overridden.
    Hence we will find ourselves with a massive file of outdated/unused svg/png files
    if you don't clean them out as we go.)*/
gulp.task('sprites_beginClean', () => {
    return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

/* TASK:

*/
gulp.task('sprites_createIcons', ['sprites_beginClean'],() => {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(iconConfig))
        .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('sprites_createPngCopy', ['sprites_createIcons'], () => {
    return gulp.src('./app/temp/sprite/css/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task('sprites_copyGraphic', ['sprites_createIcons', 'sprites_createPngCopy'], () => {
    return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
        .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('sprites_copyIconCss', ['sprites_createIcons'], () =>{
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('__icon.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('sprites_endClean', ['sprites_copyGraphic', 'sprites_copyIconCss'], () => {
    return del('./app/temp/sprite');
});
