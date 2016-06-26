var gulp = require("gulp");

//合并
var concat = require('gulp-concat');

//压缩
var uglify = require("gulp-uglify");

//合并压缩

 // gulp.task("concat",function(){
 // 	 gulp.src(["src/script1.js","src/script2.js"])
 // 	     .pipe(concat("script.js"))
 // 	     .pipe(uglify())
 // 	     .pipe(gulp.dest('dis/'))
 // })
 // gulp.task("default",["concat"]);

 //直接压缩
 gulp.task('uglify',function(){
 	gulp.src("src/iscroll5.js")
 	    .pipe(uglify())
 	    .pipe(gulp.dest("min/"))
 })
 gulp.task("default",["uglify"])