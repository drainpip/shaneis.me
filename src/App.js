import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ContentContainer from "./patterns/containers/Content";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ContentContainer>
              <h1 className="App-header__title">Shane is me</h1>
              <p className="App-header__quote">
                "But who is wurs shod, than the shoemakers wyfe, With shops full
                of newe shapen shoes all hir lyfe?"
              </p>
            </ContentContainer>
          </header>
          <section className="App-body">
            <ContentContainer>
              <article>
                <p>
                  I've always had grandiose plans for a personal website that
                  have never come to fruition. Instead my creative energy goes
                  into work or fanciful things like writing stories for an{" "}
                  <a href="https://copy-of-kate.com/">audience of one</a>.
                </p>
                <p>
                  Something about me: I'm pretty good at my three C's: Cars,
                  Computers and Canines. I have been an ASE Parts Specialist
                  (P1, P2 and P4) so no mechanic can cheat me. I have been
                  tinkering with Computer hardware and programming since the
                  early 90's. I also spent a few years learning about Canine
                  behavior including six months of direct work with a senior
                  trainer - I did this more for personal learning than starting
                  a business, but I'm certainly open to such things.
                </p>
                <h3>More?</h3>
                <p>
                  I have a <a href="https://github.com/drainpip">Github</a>{" "}
                  profile for you to check out, my work history over on{" "}
                  <a href="https://www.linkedin.com/in/shaneduff/">LinkedIn</a>,
                  and if you'd like to see me{" "}
                  <a href="http://twitter.com/drainpip">unfiltered</a> have at
                  it.
                </p>
              </article>
            </ContentContainer>
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
        </div>
      </Router>
    );
  }
}

export default App;
