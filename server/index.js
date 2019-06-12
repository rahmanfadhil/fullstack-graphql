const express = require("express");
const path = require("path");

const { PORT, IS_PROD } = require("./config");
const graphql = require("./graphql");

const app = express();

graphql.applyMiddleware({ app });

if (IS_PROD) {
  app.use(express.static(path.join(__dirname, "../dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
  });
} else {
  const webpack = require("webpack");
  const devMiddleware = require("webpack-dev-middleware");
  const hotMiddleware = require("webpack-hot-middleware");
  const webpackConfig = require("../webpack.config");

  const compiler = webpack(webpackConfig);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

app.listen(PORT, () => {
  console.log(`> Server started at port ${PORT}`);
});
