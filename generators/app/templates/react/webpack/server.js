var express = require('express');
var app = express();
var chalk = require('chalk'); // chalk 粉笔。给输出上颜色
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.build');

var gulp = require("gulp"),
    deleteLines = require('gulp-delete-lines');

webpack(webpackConfig, function (err, stats) {
    if (err) throw err ;
    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n');

    console.log(chalk.cyan('  Build complete.\n'));
    console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.tpl.html over file:// won\'t work.\n'
    ));
    /**
     * 移除开发环境的 <script dev 标签
     */
    gulp.src('./build/*.html')
        .pipe(deleteLines({
            'filters': [
                /<script\s+dev/i
            ]
        }))
        .pipe(gulp.dest('build'));
});


