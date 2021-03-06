var path = require('path');

console.log('start');
console.log(process.env.MY_ENV);
console.log('end');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  mode: 'none'
};