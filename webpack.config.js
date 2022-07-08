const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
      display: './src/display.js',
      index: './src/index.js',
      subscriptions: './src/subscriptions.js',
      gameboard: './src/gameboard.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Battleship',
      }),
    ],
     output: {
      filename: '[name].bundle.js',
       path: path.resolve(__dirname, 'dist'),
       clean: true,
     },
     module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
   };
