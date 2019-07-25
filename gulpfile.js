const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

// CSS Tasks
gulp.task('scss:compile', () => {
  return gulp.src('scss/mdb.scss')
    .pipe(sass({
      outputStyle: 'nested'
    }))
    .on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'));
});
