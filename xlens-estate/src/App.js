import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import Projects from './components/projects/projects';
import Services from './components/services/service';
import About from './components/about/about';
import Contact from './components/contact/contact';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Exterior from './components/exterior/exterior';
import Landscape from './components/landscape/landscape';
import Floor from './components/3dfloor/floor';
import Products from './components/products/products';

const App = () => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <div className="App">
      <Header isTransparent={isHomepage} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/exterior" element={<Exterior />} />
        <Route path="/landscape" element={<Landscape />} />
        <Route path="/Floor" element={<Floor />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
