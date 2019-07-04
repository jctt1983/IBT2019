const path = require('path');

const baseConfig = {
	root: path.resolve(__dirname),
	template: path.resolve(__dirname, './src/index.html'),
};

module.exports = function (env) {
	const c = Object.assign(baseConfig, {
		IS_PRD: env === 'prd',
		NODE_ENV: env === 'prd' ? 'production' : 'development'
	});

	if (env === 'dev') {
		return require('./webpack/webpack.dev.js')(c);
	} else if (env === 'prd') {
		return require('./webpack/webpack.prd.js')(c);
	}

	console.info(
		'Wrong build parameters.' + '\n' +
		'Usage:' + '\n' +
		'`webpack -p --env dev` or `webpack -p --env prd`'
	);
};
