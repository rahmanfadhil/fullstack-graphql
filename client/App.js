import React from "react";
import { BrowserRouter, HashRouter, Route, Link } from "react-router-dom";

import Counter from "./pages/Counter";
import About from "./pages/About";

export default function App() {
  const Router =
    process.env.NODE_ENV === "production" ? BrowserRouter : HashRouter;

  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route exact path="/" component={Counter} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}
