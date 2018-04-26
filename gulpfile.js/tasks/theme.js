// ==== THEME ==== //

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({ camelize: true });
const config = require('../../gulpconfig').theme;

// Copy PHP source files to the `build` folder
gulp.task('theme-php', function() {
  return gulp
    .src(config.php.src)
    .pipe(plugins.changed(config.php.dest))
    .pipe(gulp.dest(config.php.dest));
});

// Copy Twig source files to the 'build/templates' folder
gulp.task('theme-twig', function() {
  return gulp
    .src(config.twig.src)
    .pipe(plugins.changed(config.twig.dest))
    .pipe(plugins.flatten())
    .pipe(gulp.dest(config.twig.dest));
});

// Copy fonts to the build/templates folder
gulp.task('theme-fonts', () => {
  return gulp
    .src(config.fonts.src)
    .pipe(plugins.changed(config.fonts.dest))
    .pipe(gulp.dest(config.fonts.dest));
});

// All the theme tasks in one
gulp.task('theme', ['theme-php', 'theme-twig', 'theme-fonts']);
