import React from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';

const Nav = () => (
  <Jumbotron>
    <h1 className="header">Forex Tracker</h1>
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">Current</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/history">History</NavLink>
      </li>
    </ul>
  </Jumbotron>
);


export default Nav;
