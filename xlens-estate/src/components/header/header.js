import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.png';

const Header = ({ isTransparent }) => {
  return (
    <header className={`header ${isTransparent ? 'transparent' : 'black'}`}>
      <div className="logo">
      <Link to="/"> <img src={logo} alt="logo" /></Link>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
