const webpack = require('webpack');
const path = require('path');
const fs = require("fs");

//// Options ///////////////////////////////////
const libraryName = "HelloWorld"; 						// a global variable with this name will be created
const entryFilePath = "./src/js/"+libraryName+".js"; 	// The entry file. Any statements: `import <library>` inside the entry file will also be bundled. If you don't want that, define the library in "externals" (see below).
const outputFolder = "./src/js/";						// everything ends up in this directory
const outputSubPath = libraryName+"_bundle.js"; 		// just give a filename (or filename prepended with a subdirectory)
//////////////////////////////////////////////

if (path.resolve(entryFilePath) === path.resolve(outputSubPath)) {
	// Avoid overwriting source files
	throw Error("entryFilePath equals outputSubPath!");
}

// The value of `debug` decides on:
// - what plugins to use
// - inline-map or not
const debug = process.env.NODE_ENV !== "production";


const config = {
	entry: entryFilePath,
	devtool: debug ? "inline-sourcemap" : null,
	output: {
		path: outputFolder,
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
		// "$": "jQuery",
		"Dialog": "Dialog"
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