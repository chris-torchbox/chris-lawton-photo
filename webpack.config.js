const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

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
          options: { presets: ['react', 'env'] },
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
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
};
