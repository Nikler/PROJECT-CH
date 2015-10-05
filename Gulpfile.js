"use strict";

var gulp = require('gulp'),
	concatCSS = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	minifyCSS = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	sass = require('gulp-sass'),
	uncss = require('gulp-uncss'),
	rev = require('gulp-rev-append'),
	wiredep = require('wiredep').stream,
	useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
	connect = require('gulp-connect');

// css
gulp.task('css', function() {
	return gulp.src('scss/style.scss')
	.pipe(sass())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css/'))
    .pipe(connect.reload());
});

// html
gulp.task('html', function() {
	gulp.src('index.html')
	.pipe(connect.reload());
})

// Чистим кэш (добавляем хэш-сумму к css файлу ,указанному в index.html)
gulp.task('rev', function() {
  gulp.src('./index.html') // К пути файла style.css в конце нужно приписать "?rev=@@hash" 
    .pipe(rev())
    .pipe(gulp.dest(''));
});

// connect server & livereload
gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

// watch
gulp.task('watch', function() {
	gulp.watch('scss/**/*.scss', ['css', 'rev'])
	gulp.watch('index.html', ['html'])
});

// Отчистка от неиспользуемых стилей
gulp.task('uncss', function () {
    return gulp.src('site.css') // Путь к файлу со стилями
        .pipe(uncss({
            html: ['index.html'] // Путь к html-файлу ,где будет произведен поиск 
        }))
        .pipe(gulp.dest('./out'));
});

// Автоматическое подключение бибилиотек из bower_components
gulp.task('bower', function () {
  gulp.src('index.html')
    .pipe(wiredep({
      directory : "bower_components"
    }))
    .pipe(gulp.dest(''));
});

// Чистка папки build
gulp.task('clean', function () {
    return gulp.src('./build', {read: false})
        .pipe(clean());
});

// Объединение файлов стилей и скриптов в один ,создание папки build
gulp.task('html2',['clean'],  function () {
    var assets = useref.assets();

    return gulp.src('./*.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCSS()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('build'));
});

// connect & watch (default)
gulp.task('default', ['connect','html' ,'css' ,'rev', 'watch']);