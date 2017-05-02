import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import ContentContainer from '../containers/Content';

import './TopNav.css';

const TopNav = (props) => {
  return (
    <ContentContainer>
      <h1 className="App-header__title has-navigation"><Link to="/">Shane is me</Link></h1>
      <hr className="TopNav__Top" />
      <ul className="TopNav">
        <li><NavLink to="/experimenting" className="TopNav__Link" activeClassName="is-active">Experiments</NavLink></li>
        <li><NavLink to="/organizing" className="TopNav__Link" activeClassName="is-active">Organization</NavLink></li>
      </ul>
    </ContentContainer>
  );
};

export default TopNav;
