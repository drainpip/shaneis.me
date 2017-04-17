import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './TopNav.css';

const TopNav = (props) => {
  return (
    <div>
      <h1 className="App-header__title has-navigation"><Link to="/">Shane is me</Link></h1>
      <ul className="TopNav">
        <li><NavLink to="/experiments" className="TopNav__Link" activeClassName="is-active">Experiments</NavLink></li>
        <li><NavLink to="/organization" className="TopNav__Link" activeClassName="is-active">Organization</NavLink></li>
      </ul>
    </div>
  );
};

export default TopNav;
