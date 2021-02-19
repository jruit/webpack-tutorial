var path = require('path');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js',
    filename: 'bundle2.js',
  },
  plugins:[
    new CleanWebpackPlugin()    
  ],
  mode: 'none'
};