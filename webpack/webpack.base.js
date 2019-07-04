const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (config) {
	let nodeModulesPath = path.resolve(config.root, 'node_modules');

	return {
		entry: {
			IBT: './src/IBT.tsx'
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".json"],
			alias: {
				'@ibt-root': path.resolve(config.root, './src'),
				'@ibt-components': path.resolve(config.root, './src/components'),
				'@ibt-models': path.resolve(config.root, './src/models'),
			},
		},
		module: {
			rules: [
				// ts-loader: convert typescript (es6) to javascript (es6),
				// babel-loader: converts javascript (es6) to javascript (es5)
				{
					test: /\.tsx?$/,
					loaders: ['babel-loader', 'ts-loader'],
					exclude: [/node_modules/, nodeModulesPath]
				},
				// babel-loader for pure javascript (es6) => javascript (es5)
				{
					test: /\.(jsx?)$/,
					loaders: ['babel-loader'],
					exclude: [/node_modules/, nodeModulesPath]
				},
				{
					test: /\.(css|scss)$/,
					use: [
						'style-loader',
						{
							loader: 'typings-for-css-modules-loader',
							options: {
								modules: true,
								namedExport: true,
								localIdentName: '[name]__[local]--[hash:base64:5]'
							}
						},
						'sass-loader'
					],
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: config.template
			}),
			new webpack.EnvironmentPlugin({
				NODE_ENV: config.NODE_ENV || 'development', // use 'development' unless config.NODE_ENV is defined
				DEBUG: false
			})
		]
	};
};
