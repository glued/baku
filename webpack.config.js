var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var dirJs = path.resolve(__dirname, 'demo');
var dirHtml = path.resolve(__dirname, 'demo');
var dirBuild = path.resolve(__dirname, 'dist');

module.exports = {
    entry: ['babel-polyfill', path.resolve(dirJs, 'index.js')],
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'jscs-loader', exclude: /node_modules/ },
    ],
    output: {
        path: dirBuild,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: dirBuild,
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{ from: dirHtml }]),
        new webpack.NoErrorsPlugin()
    ],
    stats: { colors: true },
    devtool: 'source-map',
};
