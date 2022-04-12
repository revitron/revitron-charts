const path = require('path');
const outputPath = path.resolve(__dirname, 'public/dist');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const minifyHTML = (html) => {
	return html
		.replace(/\s+/g, ' ')
		.replace(/\s+\</g, '<')
		.replace(/\<\s+/g, '<')
		.replace(/\s+\>/g, '>')
		.replace(/\>\s+/g, '>');
};

module.exports = {
	entry: { main: './src/client/index.ts' },
	optimization: {
		minimizer: [new CssMinimizerPlugin(), '...'],
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: 'all',
					name: 'vendor',
					enforce: true,
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'string-replace-loader',
						options: {
							search: /(`[^`]+`)/g,
							replace(match, p1, offset, string) {
								return minifyHTML(p1);
							},
						},
					},
					{
						loader: 'ts-loader',
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(less|css)$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
			},
			{
				test: /\.(woff2?)$/i,
				type: 'asset/resource',
				generator: {
					filename: (pathData) => {
						const name = path.basename(
							pathData.module.resourceResolveData.relativePath
						);

						return './fonts/' + name.replace('.var', '-var');
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		path: outputPath,
		filename: '[name].bundle.js',
	},
};
