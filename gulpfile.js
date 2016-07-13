/**
 * Created by liljay on 2016/7/5.
 */
var gulp = require('gulp')
var gulpSass = require('gulp-sass')
var less = require('gulp-less')
var plumber = require('gulp-plumber')
var concat = require('gulp-concat')
var autoprefixer = require('gulp-autoprefixer')
var browserSync = require('browser-sync').create()
var base = './dist'
var config = {
    base: './dist',
    source: {
        scss: 'src/scss/*.scss',
        less: 'src/less/*.less',
        script: 'src/js/*.js'
    },
    dist: {
        scss: base +　'/css',
        less: base +　'/css',
        script: base + '/js'
    },
    AUTOPREFIXER_BROWSERS: [
        'ie >= 8',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 2.3',
        'bb >= 10'
    ]
}
gulp.task('sass', function() {
    return gulp.src(config.source.scss)
        .pipe(plumber({errorHandler: function (err) {
            console.log(err);
            this.emit('end');
        }}))
        .pipe(gulpSass())
        .pipe(autoprefixer({browsers: config.AUTOPREFIXER_BROWSERS}))
        .pipe(gulp.dest(config.dist.scss))
        .pipe(browserSync.stream());
});
gulp.task('less', function() {
    return gulp.src(config.source.less)
        .pipe(plumber({errorHandler: function (err) {
            console.log(err);
            this.emit('end');
        }}))
        .pipe(less())
        .pipe(autoprefixer({browsers: config.AUTOPREFIXER_BROWSERS}))
        .pipe(gulp.dest(config.dist.less))
        .pipe(browserSync.stream());
});
gulp.task('script', function() {
    return gulp.src(config.source.script)
        .pipe(concat('custom.js'))
        .pipe(gulp.dest(config.dist.script))
        .pipe(browserSync.stream());
});
/*gulp.task('html', function() {
    return gulp.src(config.source.html)
        .pipe(gulp.dest(config.dist.html));
});*/

gulp.task('server', function(){
    browserSync.init({
        notify: false,
        server: {
            baseDir: './'
        },
        start: config.base + '/index.html',
        injectChanges: true,
        //logLevel: "debug",
        browser: "google chrome",
        open: false,
        port: 3300
    });

    gulp.watch(config.source.scss, ['scss']);
    gulp.watch(config.source.script, ['script']);
    gulp.watch(config.source.less, ['less']);
/*    gulp.watch('./dist/!*.html', function (){
        browserSync.reload();
    });*/
    gulp.watch(config.source.scss).on('change', function(sd){
        if(sd.type === 'added'){
            gulp.start('sass');
        }
    });
    gulp.watch(config.source.less).on('change', function(sd){
        if(sd.type === 'added'){
            gulp.start('less');
        }
    });
    gulp.watch(config.source.script).on('change', function(sd){
        if(sd.type === 'added'){
            gulp.start('script');
        }
    });
    gulp.watch('./dist/*.html').on('change', function(sd){
        browserSync.reload();
    });
});

gulp.task('default', ['server', 'sass', 'script', 'less']);