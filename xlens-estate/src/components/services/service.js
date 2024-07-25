import React, { useState } from 'react'
import "./service.css"
import loouge4 from "../../assets/loouge4.png"
import lounge from "../../assets/lounge.png"
import Lounge3 from "../../assets/Lounge3.png"
import bed from "../../assets/bed.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const Service = () => {
    const [clickedIndex, setClickedIndex] = useState(null);
    const [currentImages, setCurrentImages] = useState([loouge4, lounge, Lounge3]);
  
    const imageSets = {
      Interior: [ Lounge3, Lounge3, lounge ],
      Exterior: [lounge, image3,  Lounge3],
      Visualization: [image2, bed,  image3],
      'Floor Plans': [ Lounge3, image2, bed],
    };
  
    const handleClick = (index) => {
      setClickedIndex(index);
      setCurrentImages(imageSets[Object.keys(imageSets)[index]]);
    };
  
  return (
    <div className='contianer'>
        <div className='head'>
        <h1>Service</h1>
        </div>
        <nav  className='nav-a'>
        <ul>
          {['Interior', 'Exterior', 'Visualization', 'Floor Plans'].map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={clickedIndex === index ? 'active' : ''}
            >
              <h3>{item}</h3>
              <hr className={clickedIndex === index ? 'active' : ''} />
            </li>
          ))}
        </ul>
        </nav>
        <div className='red'>
            <h5>Rendering pricing estimate for interior design</h5>   
        </div>
        <nav  className='nav-b'>
            <ul>
                <li><h3>Timeframe<span>: 3-6 days</span></h3></li>
                
                <li><h3>Price Range<span>: $450-$950</span></h3></li>
                
                <li><h3>Contact Us</h3></li>
               
            </ul>
        </nav>
        <div className='lounge'>
            
        {currentImages.map((image, index) => (
          <img src={image} alt={`book-${index}`} className="lounge-image" key={index} />
        ))}
        </div>
        
        </div>
  )
}

export default Service