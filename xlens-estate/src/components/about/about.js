import React from 'react';
import "./about.css";
import abtimg from "../../assets/abtimg.png";

const About = () => {
  return (
    <div className="abt-home">
      <div className='abt'>
        <div className='abt-img'>
          <img src={abtimg} alt='About Us' />
        </div>
        <div className='abt-writeup'>
          <h1>About Us</h1>
          <br />
          <h5>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen.
          </h5>  
        </div>
      </div>
    </div>
  );
}

export default About;
