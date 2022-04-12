const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map',
	watch: true,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].bundle.css',
		}),
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			proxy: 'http://localhost/',
			files: ['**/*.php'],
		}),
	],
});
