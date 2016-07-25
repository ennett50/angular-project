'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	context: __dirname + '/app',
	entry : "./index.js",
	output : {
		path: __dirname + "/dist",
		filename: 'bundle.js'
	},
	watch: true,
	watchOptions : {
		aggregateTimeout: 100
	},
	devtool: 'inline-source-map',
	plugins: [
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			title: 'Angular App',
			filename: 'index.html',
			template: path.join(__dirname, 'app', 'index.jade')
		})
	],
	resolve: {
		modulesDirectories : ['node_modules'],
		extensions : ['', '.js']
	},
	resolveLoader : {
		modulesDirectories: ['node_modules'],
		moduleTemplates : ['*-loader', '*'],
		extensions : ['', '.js']
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel'
		}, {
			test: /\.styl$/, 
			loader: 'style-loader!css-loader!stylus-loader'
		}, {
	        test: /\.jade$/,
	        loader: 'jade-loader'
	    }, 
	    { 
	    	test: /\.css$/, 
	    	loader: 'style-loader!css-loader' 
	    },
        { 
        	test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        	loader: "file" 
        },
        { 
        	test: /\.(woff|woff2)$/, 
        	loader:"url?prefix=font/&limit=5000" 
        },
        { 
        	test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        	loader: "url?limit=10000&mimetype=application/octet-stream" 
        },
        { 
        	test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        	loader: "url?limit=10000&mimetype=image/svg+xml" 
        }]
	}
}