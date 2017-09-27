var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "build.js"
  },
  module: {
    loaders: [{
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        loader: "url-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",exclude:/node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}