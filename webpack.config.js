const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './fooConsumer.js',
  output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js'
  },
  devtool: '#source-map',
};
