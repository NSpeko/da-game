const path = require('path');

module.exports = {
  entry: [
    './src/scripts/game.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/scri,pts/'),
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: 'css-loader',
    }],
  },
};
