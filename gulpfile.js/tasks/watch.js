// ==== WATCH ==== //

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({ camelize: true });
const config = require('../../gulpconfig').watch;

// Watch (BrowserSync version): build stuff when source files are modified, let BrowserSync figure out when to reload
// Task chain: build -> browsersync -> watch
gulp.task('watch-browsersync', ['browsersync'], function() {
  gulp.watch(config.src.styles, ['styles']);
  gulp.watch(config.src.scripts, ['scripts']);
  gulp.watch(config.src.images, ['images']);
  gulp.watch(config.src.theme, ['theme']);
});

// Master control switch for the watch task
gulp.task('watch', ['watch-browsersync']);
