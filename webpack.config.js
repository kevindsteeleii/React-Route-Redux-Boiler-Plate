const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /test\.js$/, use: 'mocha-loader'},
      { 
        test: /\.(js)$/, 
        exclude:/node_modules/,
        use: [ 'babel-loader', 'eslint-loader' ]
      },
      { test: /\.(ts|tsx)$/, user: 'ts-loader'},
      { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader'},
      { test: /\.(css|scss|sass)$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]}
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}