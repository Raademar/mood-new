const path = require('path');

module.exports = {
mode: 'development',
  devServer: {
    historyApiFallback: false,
  },
  entry: {
    index: './public/javascripts/main.js',
    profile: './public/javascripts/getMood.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public/dist'),
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}