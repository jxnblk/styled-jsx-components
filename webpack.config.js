const HTMLPlugin = require('mini-html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: [
    './docs/index.js',
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HTMLPlugin()
  ]
}
