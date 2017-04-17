import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import ContentContainer from './patterns/containers/Content';
import Home from './home/Index';
import ExperimentsHome from './experiments/Index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ContentContainer>
              <h1>Shane is me</h1>
              <p className="App-header__quote">"But who is wurs shod, than the shoemakers wyfe, With shops full of newe shapen shoes all hir lyfe?"</p>
            </ContentContainer>
          </header>
          <section className="App-body">
            <ContentContainer>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/experiments/" component={ExperimentsHome} />
              </Switch>
            </ContentContainer>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
