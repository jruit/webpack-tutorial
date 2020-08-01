const path = require('path');

module.exports = {
  entry: {
    app1: './a.js',
    app2: './b.js',
    app3: './c.js',
  },
  output: {
    path: path.resolve(__dirname, ''),
    // filename: '[name]-[hash:8].js'
    filename: '[name]-[chunkhash:8].js'
  },
  mode: 'none'
};