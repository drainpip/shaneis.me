import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { css } from "emotion";

const themeColor = {
  contrastColor: "#ede8d1",
  dark: "#434249",
  red: "#a21434"
};

const heroHeader = css`
  background-image: url("https://placeimg.com/1000/400/arch/grayscale");
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 3px solid ${themeColor.dark};
  height: 60vh;
`;

const navbar = css`
  height: 3rem;
  background-color: ${themeColor.dark};
`;

const menu = css`
  display: flex;
  height: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    color: ${themeColor.contrastColor};
    line-height: 1;
    margin: auto 1rem;
  }
`;

const masthead = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(60vh - 3rem);
  justify-content: center;
`;

const redTextBackground = css`
  background-color: ${themeColor.red};
  color: ${themeColor.contrastColor};
  line-height: 1.75;
  padding: 0 0.5rem;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <header className={heroHeader}>
            <nav className={navbar}>
              <ul className={menu}>
                <li>Logo</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
            <div className={masthead}>
              <h1 className={redTextBackground}>Shane is me</h1>
              <h4 className={redTextBackground}>
                Win-win survival strategies to ensure proactive domination
              </h4>
            </div>
          </header>
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
