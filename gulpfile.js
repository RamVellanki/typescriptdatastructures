'use strict'

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    chalk = require('chalk'),
    watch = require('gulp-watch'),
    ts = require('gulp-typescript'),
    tsProject = ts.createProject('tsconfig.json'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    mocha = require('gulp-mocha');

gulp.task('compile-ts', function() {
    console.log(chalk.green('compiling TS files'));
    var soruceTsFiles = "./src/**/*.ts";

    var tsResult = gulp.src(soruceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/'))
});

gulp.task('compile-ts-test', function() {
    console.log(chalk.green('compiling TS Test files'));
    var soruceTsFiles = "./test/*.ts";

    var tsResult = gulp.src(soruceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./test/'))
});

gulp.task('clean-ts', function(cb) {
    console.log(chalk.magenta('Cleaning TS files'));
    var typeScriptGenFiles = ["./src/*.js",
        "./src/*.js.map"
    ];

    return del(typeScriptGenFiles, cb);
});

gulp.task('clean-ts-test', function(cb) {
    console.log(chalk.magenta('Cleaning TS-Test files'));
    var typeScriptGenFilesTst = ["./test/*.js",
        "./test/*.js.map"
    ];

    return del(typeScriptGenFilesTst, cb);
});

gulp.task('update-all', function() {
    runSequence('clean-ts', 'compile-ts', 'compile-ts-test', 'test', 'watch');
});

gulp.task('watch', function() {
    console.log(chalk.green('Now watching for TS file changes'));
    return gulp.watch(['./src/app/*.ts', './test/*.ts'], ['update-all']);
});

gulp.task('test', function() {
    console.log(chalk.yellow('Running tests'));
    return gulp.src('./src/**/*.test.js', { read: false })
        .pipe(mocha({ reqporter: 'nyan' }));
});

gulp.task('default', function() {
    runSequence('clean-ts', 'clean-ts-test', 'compile-ts', 'compile-ts-test', 'test');
})

gulp.task('watch', function() {
    runSequence('clean-ts', 'clean-ts-test', 'compile-ts', 'compile-ts-test', 'test', 'watch');
})