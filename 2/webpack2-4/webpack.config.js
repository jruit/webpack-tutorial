const path = require('path');

module.exports = {
  entry: {
    app1: './a.js',
    app2: './f.js',
  },
  output: {
    path: path.resolve(__dirname, ''),
    filename: '[name].js'
  },
  mode: 'none'
};