const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');

module.exports = function webpackDevConfigExport() {
  return Merge(CommonConfig, {
    plugins: [
      new webpack.DefinePlugin({
        UNSPLASH_API: JSON.stringify('https://api.unsplash.com'),
      }),
    ],
  });
};
