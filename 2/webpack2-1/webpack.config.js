const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: './js/a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  mode: 'none'
};

