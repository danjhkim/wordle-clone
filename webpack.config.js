const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist/assets'),
		filename: 'bundle.js',
	},
	// plugins: [
	// 	new HtmlWebpackPlugin({
	// 		title: 'Wordle Clone',
	// 		filename: '../index.html',
	// 	}),
	// ],
	devServer: {
		static: './dist/',
		devMiddleware: {
			publicPath: '/assets/',
		},
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
