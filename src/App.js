import React, { Component } from 'react';
import ContentContainer from './patterns/containers/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ContentContainer>
            <h1>Shane is me</h1>
            <p className="App-header__quote">"But who is wurs shod, than the shoemakers wyfe, With shops full of newe shapen shoes all hir lyfe?"</p>
          </ContentContainer>
        </header>
        <section className="App-body">
          <ContentContainer>
            <p>I've always had grandiose plans for a personal website that have never come to fruition. Instead my creative energy goes into work or fanciful things like writing stories for an audience of one.</p>
            <p>Something about me: I'm pretty good at my three C's: Cars, Computers and Canines. I have been an ASE Parts Specialist (P1, P2 and P4) so no mechanic can cheat me. I have been tinkering with Computer hardware and programming since the early 90's. I also spent a few years learning about Canine behavior including six months of direct work with a senior trainer - I did this more for personal learning than starting a business, but I'm certainly open to such things.</p>
            <h4>More?</h4>
            <ul>
              <li><a href="https://github.com/drainpip">Github</a></li>
              <li><a href="http://twitter.com/drainpip">Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/shaneduff/">LinkedIn</a></li>
            </ul>
          </ContentContainer>
        </section>
      </div>
    );
  }
}

export default App;
