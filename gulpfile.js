var gulp=require("gulp");
var uglify=require("gulp-uglify");
var concat=require("gulp-concat");

gulp.task("js",function(){
    gulp.src("./js/*.js")
        .pipe(concat("all.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./min"))
})