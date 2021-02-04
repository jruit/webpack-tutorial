const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle1.js'
  },
  plugins:[
    new CleanWebpackPlugin()    
  ],
  mode: 'none'
};