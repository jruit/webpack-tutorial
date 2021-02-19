const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  mode: 'none'
};