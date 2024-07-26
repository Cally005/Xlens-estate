import React from 'react';
import './contact.css';
import { FaFacebook, FaPhoneAlt ,  FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className='con-home'>
      <div className='con'>
        <div className='con-form'>
          <h1>Contact us</h1>
          <form>
            <div className='form-group'>
              <label htmlFor='name'>Your name</label>
              <input type='text' id='name' name='name' />
              <label htmlFor='email'>Your Email address</label>
              <input type='email' id='email' name='email' />
              <label htmlFor='message'>Please enter your message</label>
              <textarea id='message' name='message'></textarea>
              <button type='submit' className='submit-btn'>Submit</button>
            </div>

          </form>
        </div>
        <div className='con-right'>
          <div className='social-icons'>
          <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
            <FaYoutube />
          </div>
          <div className='contact-info'>
            <p>Physical Address</p>
            <p><MdOutlineEmail />Email address</p>
            <p><FaPhoneAlt  />Phone number</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
