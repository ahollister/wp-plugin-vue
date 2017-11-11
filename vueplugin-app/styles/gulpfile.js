var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sassGlob     = require('gulp-sass-glob');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS     = require('gulp-clean-css');
var rename       = require('gulp-rename');

gulp.task('sass', function() {
	return gulp.src('sass/styles.scss')
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(
			autoprefixer(
				'last 2 version',
				'safari 5',
				'ie 8',
				'ie 9',
				'opera 12.1',
				'ios 6',
				'android 4'
			)
		)
		.pipe(cleanCSS({compatibility: '*'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/sass'))
})

gulp.task('default', function() {
	gulp.start('sass');
})

gulp.task('watch', function() {
	gulp.start('default');
	gulp.watch('sass/**/*.scss', ['sass']);
})
