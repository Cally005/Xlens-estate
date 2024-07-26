import React from 'react';
import "./exterior.css";
import Exm from "../../assets/Exm.png";
import Exa from "../../assets/Exa.png";
import exb from "../../assets/exb.png";
import exc from "../../assets/exc.png";
import exd from "../../assets/exd.png";
import exe from "../../assets/exe.png";
import exf from "../../assets/exf.png";

const Exterior = () => {
  return (
    <div className='ex-home'>
      <div className='ex'>
        <div className='exm'>
          <img src={Exm} alt='book' />
        </div>
        <div className='ex-writeup'>
          <h1>Exterior</h1>
          <h1>Design</h1>
          <br />
          <h6>Clients</h6>
          <h5>Clients Name</h5>
          <br />
          <h6>Location</h6>
          <h5>Clients Name</h5>
          <br />
          <h6>Year</h6>
          <h5>2023</h5>  
        </div>
      </div>
      <div className='ex-imgs'>
        <div className='ex-1'>
          <img src={Exa} alt='book' />
          <img src={exb} alt='book' />
          <img src={exc} alt='book' />
        </div>
      </div>
      <div className='ex-imgs'>
        <div className='ex-2'>
          <img src={exd} alt='book' />
          <img src={exe} alt='book' />
          <img src={exf} alt='book' />
        </div>
      </div>
    </div>
  );
}

export default Exterior;
