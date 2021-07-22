import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <>
      <nav className="navBar">
        <NavLink exact to="/" type="button" activeClassName="active" className="buttonLink1">About</NavLink>
        <NavLink to="/family" type="button" activeClassName="active" className="buttonLink2">Family</NavLink>
        <NavLink to="/assets" type="button" activeClassName="active" className="buttonLink3">Assets</NavLink>
        <NavLink to="/contact" type="button" activeClassName="active" className="buttonLink3">Contact</NavLink>
      </nav>
    </>
  );
}

export default Navbar;
