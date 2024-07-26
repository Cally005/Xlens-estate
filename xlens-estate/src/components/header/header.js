import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa'; // Use any icon library you prefer

const Header = ({ isTransparent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className={`header ${isTransparent ? 'transparent' : 'black'} ${isSidebarOpen ? 'open' : ''}`}>
      <div className="logo">
        <Link to="/"><img src={logo} alt="logo"  className={`navbar ${isSidebarOpen ? 'active' : ''}`} /></Link>
      </div>
      <nav className={`navbar ${isSidebarOpen ? 'active' : ''}`}>
        <ul>
        <li onClick={closeSidebar}><Link to="/">Home</Link></li>
          <li onClick={closeSidebar}><Link to="/projects">Projects</Link></li>
          <li onClick={closeSidebar}><Link to="/services">Services</Link></li>
          <li onClick={closeSidebar}><Link to="/about">About Us</Link></li>
          <li onClick={closeSidebar}><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={toggleSidebar}>
        <FaBars />
      </div>
    </header>
  );
};

export default Header;

