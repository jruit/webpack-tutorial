var path = require('path');
var CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins:[
   new CopyPlugin({
     patterns: [
       { from: path.resolve(__dirname, 'src/img/'), to: path.resolve(__dirname, 'dist/image/') },
     ],
   }),
  ],
  mode: 'none'
};