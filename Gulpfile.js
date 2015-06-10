var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    babel  = require('gulp-babel'),
    filter = require('gulp-filter'),
    watch  = require('gulp-watch'),
    addSrc = require('gulp-add-src'),
    templateCache = require('gulp-angular-templatecache');

var paths = {
  src: [
    './src/js/header.js',
    './src/js/column.js',
    './src/js/grid.js',
    './src/js/paginator.js',
    './src/js/sl.module.js',
    './src/js/footer.js',
  ],
  dest: './build/',
  html: './src/templates/**/*.html'
};

var config = {
  moduleName: 'sl-grid'
};

gulp.task('clean', ['clean:js']);

gulp.task('build', function() {
  var htmlFilter = filter('**/*.html');

  return gulp.src(paths.src)
    .pipe(concat('angular-slgrid.js'))
    .pipe(babel({blacklist: ['strict']}))
    .pipe(addSrc(paths.html))
    .pipe(htmlFilter)
    .pipe(templateCache({module: config.moduleName}))
    .pipe(htmlFilter.restore())
    .pipe(gulp.dest(paths.dest));
});

gulp.task('watch', function() {
  gulp.watch(paths.src, ['build']);
  gulp.watch(paths.html, ['build']);
});

gulp.task('default', ['build']);

gulp.task('dev', ['build', 'watch']);
