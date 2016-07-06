/**
 * Created by liljay on 2016/7/5.
 */
var gulp = require('gulp')
var gulpSass = require('gulp-sass')
var plumber = require('gulp-plumber')
var browserSync = require('browser-sync').create()
var base = './dist'
var config = {
    base: './dist',
    source: {
        scss: 'src/scss/*.scss',
        html: 'src/*.html'
    },
    dist: {
        scss: base +　'/scss',
        html: base +　''
    }
}
gulp.task('sass', function() {
    return gulp.src(config.source.scss)
        .pipe(plumber({errorHandler: function (err) {
            console.log(err);
            //this.emit('end');
        }}))
        .pipe(gulpSass())
        .pipe(gulp.dest(config.dist.scss));
});
gulp.task('html', function() {
    return gulp.src(config.source.html)
        .pipe(gulp.dest(config.dist.html));
});
gulp.task('sass-watch', ['sass'], browserSync.reload);
gulp.task('html-watch', ['html'], function (){
    browserSync.reload();
});

gulp.task('server',['sass','html'], function(){
    browserSync.init({
        server: config.base
    });

    gulp.watch(config.source.scss, ['sass-watch']);
    gulp.watch(config.source.html, ['html-watch']);
    gulp.watch(config.source.html).on('change', function(sd){
        if(sd.type === 'added'){
            gulp.run('html');
        }
    });
    gulp.watch(config.source.scss).on('change', function(sd){
        if(sd.type === 'added'){
            gulp.run('sass');
        }
    });
});

gulp.task('default', ['server']);