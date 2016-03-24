'use strict';

var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/** @param {string} devServerUrl An URL where the development server is run */
var devServerUrl = "http://localhost:8080";

module.exports = {
    entry: [
        "webpack/hot/dev-server",
            "webpack-dev-server/client?" + devServerUrl,
        path.resolve(__dirname, 'app/app.main.js')
    ],
    output: {
        filename: "js/bundle.js"
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.css', '.html'],
        modulesDirectories: ['app', 'node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader",
                query: {
                    limit: 10000,
                    mimetype: 'application/font-woff'
                }
            },
            {
                test: /\.ttf$/,
                loader: "file-loader"
            },
            {
                test: /\.eot$/,
                loader: "file-loader"
            },
            {
                test: /\.svg$/,
                loader: "file-loader"
            },
            {
                test: /\.less$/,
                loader: "css-loader!less-loader"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: "true"
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery"
        }),
        new ExtractTextPlugin('bundle.css'),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'app/index.html'),
                to: 'index.html'
            },
            {
                from: path.resolve(__dirname, 'app/shared/directives')
            },
            {
                from: path.resolve(__dirname, 'app/faculties')
            },
            {
                from: path.resolve(__dirname, 'app/groups')
            },
            {
                from: path.resolve(__dirname, 'app/specialities')
            },
            {
                from: path.resolve(__dirname, 'app/start')
            },
            {
                from: path.resolve(__dirname, 'assets/images')
            }
        ])
    ]

};
