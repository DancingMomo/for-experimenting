var gulp = require('gulp');
require('./gulp/tasks/styles');
require('./gulp/tasks/scripts');
require('./gulp/tasks/sprites');
require('./gulp/tasks/watch');
require('./gulp/tasks/modernizr');
require('./gulp/tasks/build');

gulp.task('default', ['styles', 'scripts', 'watch']);
