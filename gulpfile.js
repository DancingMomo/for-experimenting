var gulp = require('gulp');
require('./gulp/tasks/styles');
require('./gulp/tasks/scripts');
require('./gulp/tasks/watch');
require('./gulp/tasks/modernizr');

gulp.task('default', ['styles', 'scripts', 'watch']);
