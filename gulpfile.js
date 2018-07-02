var gulp = require("gulp");

gulp.task('copy README and LICENSE', function () {
  gulp.src(['README.md', 'LICENSE', 'CONTRIBUTING.md'])
      .pipe(gulp.dest('./dist/ngx-daterangepicker'));
});

gulp.task('default', [ 'copy README and LICENSE' ]);