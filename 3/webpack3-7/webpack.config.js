const path = require('path');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(jpg|png)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1024 * 8,
          name: '[name]-[contenthash:8].[ext]',
          publicPath: './dist/'

        }
      }
    }]
  },
  mode: 'none'
};