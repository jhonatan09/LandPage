const gulp = require('gulp');
const sass = require('gulp-sass')
const rename = require('gulp-rename') 
const watch = require('gulp-watch')




gulp.task('sass', function(){
    gulp.src('src/Scss/Styles.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe( rename ({suffix: '.min'} ))
    .pipe(gulp.dest('src/dist/css'));
});

gulp.task('server', function(done) {
    gulp.watch('src/Scss/*.scss',gulp.parallel(['sass', 'server']));
    done();
});


gulp.task('default', gulp.parallel(['sass', 'server']));