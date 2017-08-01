const webpack = require('webpack');
const path = require('path');
const libraryName = 'MMapBaseClass';
const fs = require("fs");

// The value of `debug` decides on:
// - what plugins to use
// - inline-map or not
const debug = process.env.NODE_ENV !== "production";

const config = {
	//context: path.join(__dirname, "src"),
	entry: './src/'+libraryName+'.js', //entries, //'./src/js/index.js',
	devtool: debug ? "inline-sourcemap" : null,
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js", //'[name]',
		library: libraryName,
		libraryTarget: 'umd',
		umdNamedDefine: false
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /(node_modules|dist)/,
				query: {
					presets: ['latest'],
					plugins: ['transform-class-properties']
				}
			}
		]
	},
	// externals: {
	// 	"jquery": "$"
	// },
	// resolve: {
	// 	root: path.resolve('./src'),
	// 	extensions: ['', '.js']
	// },

	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
	]
};

module.exports = config;