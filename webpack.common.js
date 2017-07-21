const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const Dotenv = require('dotenv-webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: ['./js/app.js'],
    styles: './css/style.scss',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist/',
  },

  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['react', 'es2015', 'stage-3'] },
        }],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer('last 2 versions')],
            },
          },
          {
            loader: 'sass-loader',
          }],
        }),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('[name].min.css'),
    new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
  ],
};
