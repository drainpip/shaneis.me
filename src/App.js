import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <section>
            <p>This will be our three things</p>
          </section>
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
