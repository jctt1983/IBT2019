const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function (config) {
	return merge(common(config), {
		mode: 'production',
		output: {
			filename: '[name]-[hash].js', // include hash to file name in prod environment
			path: path.resolve(config.root, 'release')
		},
		devtool: 'source-map',
		plugins: [
			// new UglifyJsPlugin({
			//     sourceMap:true
			// }),
		],
		externals: {
			'react': 'React',
			'react-dom': 'ReactDOM'
		}
	});
}
