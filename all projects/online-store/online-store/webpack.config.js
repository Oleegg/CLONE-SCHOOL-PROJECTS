const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");
const CopyPlugin = require("copy-webpack-plugin");

const baseConfig = {
	entry: path.resolve(__dirname, './src/index.ts'),
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				type: "asset",
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	optimization: {
		minimizer: [
			"...",
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							["gifsicle", { interlaced: true }],
							["jpegtran", { progressive: true }],
							["optipng", { optimizationLevel: 5 }],
							[
								"svgo",
								{
									plugins: extendDefaultPlugins([
										{
											name: "removeViewBox",
											active: false,
										},
										{
											name: "addAttributesToSVGElement",
											params: {
												attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
											},
										},
									]),
								},
							],
						],
					},
				},
			}),
		],
	},
	resolve: {
		extensions: ['.js', '.ts'],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './dist'),
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: "src/images/png", to: "img" },
			],
		}),
		new webpack.ProvidePlugin({
			noUiSlider: 'nouislider'
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			filename: 'index.html',
		}),
		new CleanWebpackPlugin(),
	],
};

module.exports = ({ mode }) => {
	const isProductionMode = mode === 'prod';
	const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

	return merge(baseConfig, envConfig);
};
