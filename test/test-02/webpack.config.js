const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  devServer:{
      open:true,
      // contentBase:'./dist',
      port:8888,
      hot:true,       // 热加载
      // hotOnly:true,   // 即使html不生效，我也不让它刷新页面
  },
  plugins:[
      // 使用热模块更新方法
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
  ],
  mode: 'none'
};