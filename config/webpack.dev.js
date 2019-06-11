const { HotModuleReplacementPlugin } = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["webpack-hot-middleware/client", "./client/index.js"],
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: "babel-loader" }]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      inject: "body",
      template: "./config/template.html",
      minify: { collapseWhitespace: true }
    })
  ]
};
