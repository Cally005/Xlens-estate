import React, { useState } from 'react'
import logo from "../../assets/logo.png"

import "./footer.css"
const Footer = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your form submission logic here
      console.log('Email submitted:', email);
    };

  return (
    <div className='container'>

<nav  className='nav-a'>
            <ul>
                <li><h3>About</h3></li>
                
                <li><h3>Stockikst</h3></li>
                
                <li><h3>Contact</h3></li>
                {/* <hr></hr> */}
                <li>  <img src={logo} alt='book' className="homepage-image"/></li>
                {/* <hr></hr> */}
                <li><h3>Stay in touch</h3></li>
            </ul>

            
        </nav>
        <div className='footer-container'>
        <form  className="form-d " onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Enter your email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <button type="submit">Subscribe</button>
    </form>
    </div>

    </div>
  )
}

export default Footer