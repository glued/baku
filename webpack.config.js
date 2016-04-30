/*eslint-env node */
'use strict'
const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const dirJs = path.resolve(__dirname, 'demo')
const dirHtml = path.resolve(__dirname, 'demo')
const dirBuild = path.resolve(__dirname, 'dist')

module.exports = {
    entry: [
      'babel-polyfill',
      path.resolve(dirJs, 'index.js')
    ],
    resolve: {
      alias:{
        baku: path.resolve(__dirname, 'src')
      },
    },
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'jscs-loader', exclude: /node_modules/ },
    ],
    output: {
        path: dirBuild,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /\.js$/,
            }
        ]
    },
    devServer: {
        port: 9000,
        host: 'localhost',
        outputPath: dirBuild
    },
    plugins: [
        new CopyWebpackPlugin([{ from: dirHtml }]),
        new webpack.NoErrorsPlugin()
    ],
    stats: { colors: true },
    devtool: 'source-map',
}
