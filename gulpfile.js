const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');
const reload = browserSync.reload;


gulp.task('bs', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task("styles", () => {
    return gulp.src("./src/**/*.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(concat("style.css"))
    .pipe(gulp.dest("./public/styles"))
    .pipe(reload({stream: true}));
});

gulp.task('default', ['bs', 'styles'], () => {
    gulp.watch('./public/style.css',reload);
    gulp.watch('./src/styles/**/*.scss', ['styles']);  
    gulp.watch('./src/*.js*', reload);     
    gulp.watch('./src/*.html*', reload);    
    gulp.watch('./src/*.css*', reload);
});