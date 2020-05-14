let gulp = require('gulp');
let htmlmin = require('gulp-htmlmin');


gulp.task('default', async ()=>{

    //html
    gulp.watch('./*.html', async ()=>{
        gulp.src('./*.html')
        .pipe(gulp.dest('F:\\phpstudy2016\\WWW\\project_mi'));
    })


    //css
    gulp.watch('./css/**/*', async ()=>{
        gulp.src('./css/**/*')
        .pipe(gulp.dest('F:\\phpstudy2016\\WWW\\project_mi\\css'));
    })

    //js
    gulp.watch('./js/**/*', async ()=>{
        gulp.src('./js/**/*')
        .pipe(gulp.dest('F:\\phpstudy2016\\WWW\\project_mi\\js'));
    })

    //php
    gulp.watch('./php/**/*', async ()=>{
        gulp.src('./php/**/*')
        .pipe(gulp.dest('F:\\phpstudy2016\\WWW\\project_mi\\php'));
    })
})