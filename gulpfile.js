const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const browsersync = require('browser-sync').create();

function style(){
	return gulp.src('scss/**/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('css'))
	.pipe(browsersync.stream())
}
function watch(){
	browsersync.init({
		server: {
			baseDir: '.',
			index: 'index.html'
		}
	});
	gulp.watch('scss/**/*.scss', style)
	gulp.watch(['*.html', 'scss/**/*.scss']).on('change',browsersync.reload)
}
exports.watch = watch;
exports.style = style;
