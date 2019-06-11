import React from "react";
import { render } from "react-dom";
import App from "./App";

const ROOT = document.getElementById("root");
render(<App />, ROOT);

if (module.hot) {
  module.hot.accept("./App.js", () => {
    const NewApp = require("./App").default;
    render(<NewApp />, ROOT);
  });
}
