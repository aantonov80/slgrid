var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    babel  = require('gulp-babel');

var paths = {
  src: './src/**/*.js',
  dest: './build/'
};

gulp.task('clean', ['clean:js']);

gulp.task('build', function() {
  return gulp.src([paths.src])
    .pipe(concat('angular-slgrid.js'))
    .pipe(babel())
    .pipe(gulp.dest(paths.dest));
});

gulp.task('default', ['build']);
