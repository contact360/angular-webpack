var gulp = require('gulp');
var open = require('gulp-open');
var webpack = require('webpack');
var wait = require('gulp-wait');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

gulp.task('default', [
    'webpack-dev-server' , 'launch-browser'   
] );


gulp.task('launch-browser', function(done){
        return gulp
            .src(__filename).pipe(wait(10000))
            .pipe(open({
                uri: 'http://localhost:8080'
            }));
});
gulp.task('webpack-dev-server', function(done) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = 'eval';
	myConfig.debug = true;

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(webpackConfig), {
		
	}).listen(8080, 'localhost', function(err) {
		if(err) {
            console.log(err);
        }
        
        done();
	});

});