var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var browserSync = require( 'browser-sync' );
var sourcemaps = require( 'gulp-sourcemaps' );
var pleeease = require( 'gulp-pleeease' );
var postcss = require( 'gulp-postcss' );
var syntax = require( 'postcss-scss' );
var autoprefixer = require( 'autoprefixer' );

gulp.task( 'sass', function () {
  gulp.src( 'public/scss/core.scss' )
    .pipe( sass( {
        includePaths: [ 'public/scss' ],
        sourcemap: true
      } )
      .on( 'error', function ( err ) {
        console.error( 'Error!', err.message );
      } ) )
    .pipe( sourcemaps.write( './', {
      includeContent: false,
      sourceRoot: '/public/scss'
    } ) )
    .pipe( browserSync.stream( {
      match: 'public/css/*.css'
    } ) )
  .pipe( gulp.dest( 'public/css' ) );
} );

gulp.task( 'browser-sync', function () {
  browserSync.init( [ "public/css/*.css", "public/js/*.js" ], {
    server: {
      baseDir: "./public/"
    }
  } );
} );

gulp.task( 'default', [ 'sass', 'browser-sync' ], function () {
  gulp.watch( "./public/scss/*.scss", [ 'sass' ] );
  gulp.watch("./public/js/**/*.js", ['js']);
} );


// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('js/*js')
        .pipe(sourcemaps())
        .pipe(sass())
        .pipe(gulp.dest('public/js'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], browserSync.reload);

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['js'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./public/"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("js/*.js", ['js-watch'], BrowserSync.reload);
});


// gulp.task('javascript', function() {
//   gulp.src('src/**/*.js')
//     .pipe(sourcemaps.init({loadMaps: true}))
//       .pipe(plugin1())
//       .pipe(plugin2())
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('dist'));
// });



// postcss( plugins )
//   .process( scss, {
//     parser: syntax
//   } )
//   .then( function ( result ) {
//     result.css // CSS with normal comments
//   } );


// gulp.task( 'css', function () {
//   gulp.src( './public/css/*.css' )
//     .pipe( sourcemaps.init() )
//     .pipe( pleeease( {
//       paths: [ 'public/scss/core.scss' ]
//       sass: true,
//       out: 'out.min.css'
//     } ) )
//     .pipe( rename( {
//       // suffix: '.min',
//       extname: '.css'
//     } ) )
//     .pipe( sourcemaps.write() )
//     .pipe( gulp.dest( './dest' ) );
// } );


// gulp.task( 'autoprefixer', function () {
//   return gulp.src( './public/css/*.css' )
//     .pipe( sourcemaps.init() )
//     .pipe( postcss( [ autoprefixer( {
//       browsers: [ 'last 2 versions' ]
//     } ) ] ) )
//     .pipe( sourcemaps.write( '.' ) )
//     .pipe( gulp.dest( './dest' ) );
// } );
