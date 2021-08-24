const gulp = require('gulp');

gulp.task('css', () => {
    const postcss = require('gulp-postcss');
    const csscomb = require('gulp-csscomb');

    return gulp.src('asset_sources/css/main.css')
      .pipe(postcss())
      .pipe(csscomb())
      .pipe(gulp.dest('assets/static/'));
});

gulp.task('build', gulp.series('css'));

gulp.task('watch', () => {
    gulp.watch('asset_sources/css/*.css', gulp.series('css'));
});

gulp.task('default', gulp.series('build'));
