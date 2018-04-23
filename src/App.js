import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Features from "./Features";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Features />
          <section>
            <p>About</p>
          </section>
          <section>
            <p>Contact</p>
          </section>
          <Route
            path="/"
            render={({ location }) => {
              if (typeof window.ga === "function") {
                window.ga("set", "page", location.pathname + location.search);
                window.ga("send", "pageview");
              }
              return null;
            }}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
