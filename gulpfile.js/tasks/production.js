var gulp         = require('gulp');
var runSequence = require('run-sequence');

var productionTask = function() {
  runSequence(
    'clean',
    ['fonts', 'images', 'svgSprite', 'static'],
    ['html', 'css', 'vendorScripts', 'scripts']
  );
};

gulp.task('production', productionTask);
