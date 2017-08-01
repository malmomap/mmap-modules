const webpack = require('webpack');
const path = require('path');
const fs = require("fs");

//// Options ///////////////////////////////////
const outputFolder = "./dist";				// everything ends up here
const outputSubPath = "js/bundle.js"; 		// added to the outputFolder path
const libraryName = "LagesKarta"; 			// a global variable with this name will be created
const entryFilePath = "./src/js/index.js"; 	// The entry file. If import <library> is used inside this file, the imported file(s) will also be included in the bundle. If you don't want that, set the library as an external below.
//////////////////////////////////////////////

// The value of `debug` decides on:
// - what plugins to use
// - inline-map or not
const debug = process.env.NODE_ENV !== "production";


const config = {
	entry: entryFilePath,
	devtool: debug ? "inline-sourcemap" : null,
	output: {
		path: "./dist",
		filename: outputSubPath,
		library: libraryName,
		libraryTarget: 'var'
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
	externals: {
		"jquery": "$"
	},
	resolve: {
		root: path.resolve('./src/js'),
		extensions: ['', '.js']
	},

	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
	]
};

module.exports = config;