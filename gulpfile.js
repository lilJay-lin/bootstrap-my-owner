/**
 * Created by liljay on 2016/7/5.
 */
var gulp = require('gulp')
var gulpSass = require('gulp-sass')

gulp.task('sass', function() {
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);