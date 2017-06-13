import React from 'react';
import { Link } from 'react-router-dom';

const Index = (props) => {
  return (
    <article>
      <p>I've always had grandiose plans for a personal website that have never come to fruition. Instead my creative energy goes into work or fanciful things like writing stories for an <a href="https://copy-of-kate.com/">audience of one</a>.</p>
      <p>Something about me: I'm pretty good at my three C's: Cars, Computers and Canines. I have been an ASE Parts Specialist (P1, P2 and P4) so no mechanic can cheat me. I have been tinkering with Computer hardware and programming since the early 90's. I also spent a few years learning about Canine behavior including six months of direct work with a senior trainer - I did this more for personal learning than starting a business, but I'm certainly open to such things.</p>
      <p>I'm going to have some <Link to="/experimenting">React experiments</Link> up someday (when I have some extra spare time).</p>
      <h3>More?</h3>
      <p>I have a <a href="https://github.com/drainpip">Github</a> profile for you to check out, my work history over on <a href="https://www.linkedin.com/in/shaneduff/">LinkedIn</a>, and if you'd like to see me <a href="http://twitter.com/drainpip">unfiltered</a> have at it.</p>
    </article>
  );
};

export default Index;
