// ==== SCRIPTS ==== //

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({ camelize: true });
const merge = require('merge-stream');
const config = require('../../gulpconfig').scripts;

// Minify scripts in place
gulp.task('scripts-minify', function() {
  return (gulp
      .src(config.minify.src)
      .pipe(plugins.sourcemaps.init())
      // .pipe(plugins.uglify(config.minify.uglify))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(config.minify.dest)) );
});

// Master script task; lint -> bundle -> minify
gulp.task('scripts', ['scripts-minify']);
