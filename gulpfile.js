'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    rigger = require('gulp-rigger'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    concat = require('gulp-concat'),
    inlineSvg = require("gulp-inline-svg"),
    svgmin = require('gulp-svgmin'),
    browserSync = require("browser-sync"),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    reload = browserSync.reload;

var path = {
    build: {
        html: 'build/',
        js: 'build/assets/js/',
        css: 'build/assets/css/',
        img: 'build/assets/img/',
        video: 'build/assets/video/',
        font: 'build/assets/fonts/',
        slick: 'build/slick/'
    },
    src: {
        html: 'src/*.html', 
        js: 'src/assets/js/**/*.js',
        style: 'src/assets/style/*.sass',
        img: 'src/assets/img/**/*.*',
        video: 'src/assets/video/**/*.*',
        font: 'src/assets/fonts/**/*.*',
        css: 'src/assets/style/*.css',
        slick: 'src/slick/**/*.*'
    },
    watch: { 
        html: 'src/**/*.html',
        js: 'src/assets/js/**/*.js',
        style: 'src/assets/style/**/*.sass',
        img: 'src/assets/img/**/*.*',
        video: 'src/assets/video/**/*.*',
        font: 'src/assets/fonts/**/*.*'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 8000,
    logPrefix: "Frontend"
};

gulp.task('js:build', function () {
    gulp.src(path.src.js)
    // .pipe(uglify())
    .pipe(gulp.dest(path.build.js)) 
    .pipe(reload({stream: true})); 
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('style_css:build', function () {
    gulp.src(path.src.css)
        .pipe(prefixer())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img) 
        // .pipe(imagemin({
        //     progressive: true,
        //     use: [pngquant()],
        //     interlaced: true
        // }))
        .pipe(gulp.dest(path.build.img)) 
        .pipe(reload({stream: true}));
});
gulp.task('video:build', function () {
    gulp.src(path.src.video)
        .pipe(gulp.dest(path.build.video))
        .pipe(reload({stream: true}));
});

gulp.task('html:build', function () {
    gulp.src(path.src.html) 
        .pipe(rigger()) 
        .pipe(gulp.dest(path.build.html)) 
        .pipe(reload({stream: true})); 
});
gulp.task('slick:build', function () {
    gulp.src(path.src.slick)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.slick))
        .pipe(reload({stream: true}));
});

gulp.task('font:build', function() {
    gulp.src(path.src.font)
        .pipe(gulp.dest(path.build.font))
});

gulp.task('build', [
    'js:build',
    'style:build',
    'html:build',
    'font:build',
    'video:build',
    'style_css:build',
    'slick:build',
    'image:build',
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.video], function(event, cb) {
        gulp.start('video:build');
    });
    watch([path.watch.font], function(event, cb) {
        gulp.start('font:build');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});
gulp.task('default', ['build', 'webserver', 'watch']);
