import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import ContentContainer from './patterns/containers/Content';
import ExperimentsHome from './experiments/Index';
import Home from './home/Index';
import HomeHeader from './home/Header';
import NotFound from './NotFound';
import OrganizationHome from './organization/Index';
import TopNav from './patterns/navigation/TopNav';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ContentContainer>
              <Switch>
                <Route exact path="/" component={HomeHeader} />
                <Route component={TopNav} />
              </Switch>
            </ContentContainer>
          </header>
          <section className="App-body">
            <ContentContainer>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/experiments/" component={ExperimentsHome} />
                <Route path="/organization/" component={OrganizationHome} />
                <Route component={NotFound} />
              </Switch>
            </ContentContainer>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
