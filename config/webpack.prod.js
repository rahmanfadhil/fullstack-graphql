const path = require("path");
const { ProgressPlugin } = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: "babel-loader" }]
  },
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      inject: "body",
      template: "./config/template.html",
      minify: { collapseWhitespace: true }
    })
  ]
};
