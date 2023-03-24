import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Styles.css';

const Navbar = ({ text, handleClick }) => {

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-center" id="logo">
          BIT people
        </Link>
        <div className="col-md-8">
          <ul className="navbar-nav ml-auto" id="nav">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/" onClick={handleRefresh}>
              <i className="material-icons">refresh</i>
            </NavLink>
            <NavLink to="/" onClick={handleClick}>
              <i className="material-icons">{text}</i>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
