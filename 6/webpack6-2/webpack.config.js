var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_OLD: true,
      MY_ENV: JSON.stringify('dev'),
      NAME: "'Jack'",
    }),
  ],
  mode: 'none'
};