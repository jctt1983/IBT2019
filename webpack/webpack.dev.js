const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = function (config) {
	return merge(common(config), {
		mode: 'development',
		output: {
			filename: '[name].js',
			path: path.resolve(config.root, 'dist')
		},
		devtool: 'source-map',
		plugins: [

		],
		watch: true,
		devServer: {
			contentBase: path.join(config.root, 'dist'),
			watchContentBase: true,
			compress: true,
			port: 9000
		}
	})
};
