const path = require('path');

module.exports = {
    entry: './dist/scripts/game.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src/')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: 'css-loader'
        }]
    }
};