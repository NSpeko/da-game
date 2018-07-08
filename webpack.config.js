const path = require('path');

module.exports = {
  entry: ['./src/scripts/gameModules.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/scripts/')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'css-loader'
      }
    ]
  }
};
