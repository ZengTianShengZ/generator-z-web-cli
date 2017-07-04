/**
 * Created by ZengTianSheng on 2017/3/23.
 */

var gulp = require("gulp"),
    rename = require('gulp-rename'),
    filter = require('gulp-filter'),
    deleteLines = require('gulp-delete-lines');



gulp.task('remove-scripts', function () {
    gulp.src('./build/static/*.html')
        .pipe(deleteLines({
            'filters': [
                /<script\s+dev/i
            ]
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build',['remove-scripts'],function (d) {

});


