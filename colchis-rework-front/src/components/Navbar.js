import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink exact to="/" type="button" activeClassName="active" className="button-about">About</NavLink>
        <NavLink to="/family" type="button" activeClassName="active" className="button-family">Family</NavLink>
        <NavLink to="/assets" type="button" activeClassName="active" className="button-assets">Assets</NavLink>
        <NavLink to="/contact" type="button" activeClassName="active" className="button-contact">Contact</NavLink>
      </nav>
    </>
  );
}

export default Navbar;
