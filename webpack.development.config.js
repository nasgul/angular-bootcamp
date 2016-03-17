'use strict';

var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

/** @param {string} devServerUrl An URL where the development server is run */
var devServerUrl = "http://localhost:8080";

module.exports = {
  entry: [
    "webpack/hot/dev-server",
    "webpack-dev-server/client?" + devServerUrl,
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    filename: "js/bundle.js"
  },
  resolve: {
    root: __dirname,
    modulesDirectories: ['app', 'node_modules']
  },
  module: {
    loaders: [{
      test: /\.(woff|woff2)$/,
      loader: "url-loader",
      query: {
        limit: 10000,
        mimetype: 'application/font-woff'
      }
    }, {
      test: /\.ttf$/,
      loader: "file-loader"
    }, {
      test: /\.eot$/,
      loader: "file-loader"
    }, {
      test: /\.svg$/,
      loader: "file-loader"
    }, {
      test: /\.less$/,
      loader: "css-loader!less-loader"
    }, {
      test: /\.html$/,
      loader: "html-loader"
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: "true"
    }),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'app/index.html'),
      to: 'index.html'
    }, {
      from: path.resolve(__dirname, 'app/favicon.ico'),
      to: 'favicon.ico'
    }, {
      from: path.resolve(__dirname, 'app/assets/images'),
      to: 'images'
    }])
  ]

};
