const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  // module: {
  //   rules: [{
  //     test: /\.css/,
  //     use: ['style-loader', 'css-loader']
  //   }]
  // },
  module: {
      rules: [
          {
              test: /\.css$/,
              use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader', 
              ],
          },
          {
              test: /\.png$/,
              use: [
            
                  'file-loader', 
              ],
          },
      ]
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: 'app.css'
      }),
      new BundleAnalyzerPlugin(),
  ],
  mode: 'none',
  devtool: 'source-map',
};