import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./homepage.css";
import dot1 from "../../assets/dot1.png";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow.png";
import arrowback from "../../assets/arrowback.png";
import Projects from '../projects/projects';
import bed from "../../assets/bed.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import Services from '../services/service';
import Footer from '../footer/footer';
import Header from '../header/header';

const images = [bed, image2, image3];

const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  

  return (
    <div className="homepage-container">
          {/* <Header transparent /> */}
      <div className="home-p" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div className="overlay"></div> 
      
        {/* <Header/> */}
        <div className='parent'>
          {currentImageIndex === 0 && (
            <div className='slide-1'>
              <hr />
              <h1>01</h1>
              <h2>GLATT Estate</h2>
              <p>
                It is a long established fact that a reader
                will be distracted by the readable content
                of a page when looking at its layout.
                The point of using Lorem ipsum.
              </p>
            </div>
          )}

          {currentImageIndex === 1 && (
            <div className='slide-2'>
              <hr />
              <h1>02</h1>
              <div className='s-content'>
                <h2>MHQ Project</h2>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum.
                </p>
              </div>
            </div>
          )}

          {currentImageIndex === 2 && (
            <div className='slide-3'>
              <hr />
              <h1>03</h1>
              <div className='s-content'>
                <h2>Blum</h2>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum.
                </p>
              </div>
            </div>
          )}

          <div className='dots'>
            <h4>+ SEE PROJECT</h4>
            <div className='dots-con'>
            <ul>
              <li className={`dot-1 ${currentImageIndex === 0 ? 'active' : ''}`}></li>
              <li className={`dot-2 ${currentImageIndex === 1 ? 'active' : ''}`}></li>
              <li className={`dot-3 ${currentImageIndex === 2 ? 'active' : ''}`}></li>
            </ul>
            </div>
          </div>
        </div>

        <div className='b-nav'>
          <div className='proj'>
            <p>Latest Project</p>
            <h4>Modern Industrial Loft</h4>
            <p>Year completed 2022</p>
          </div>
          <div className='loc'>
            <p>Location</p>
            <h4>New York, USA</h4>
          </div>
          <div className='theme'>
            <h4>Theme & style</h4>
          </div>
          <div className='arrow'>
            <ul>
              <li><img src={arrow} alt='book' className="arrow-1" onClick={nextImage} /></li>
              <li><img src={arrowback} alt='book' className="arrow-2" onClick={previousImage} /></li>
            </ul>
          </div>
        </div>
      </div>
      <Projects/>
      <Services/>
      {/* <Footer/> */}
    </div>
 
  );
}

export default Homepage;


// import React, { useState } from 'react'
// import  "./homepage.css"
// import dot1 from "../../assets/dot1.png"
// import logo from "../../assets/logo.png"
// import arrow from "../../assets/arrow.png"
// import arrowback from "../../assets/arrowback.png"
// import Projects from '../projects/projects'
// import bed from "../../assets/bed.png"
// import image2 from "../../assets/image2.png"
// import image3 from "../../assets/image3.png"
// import Services from '../services/service'
// import Footer from '../footer/footer'


// const images = [bed, image2, image3];
// const  Homepage = () => {

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     const nextImage = () => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };
  
//     const previousImage = () => {
//       setCurrentImageIndex((prevIndex) => 
//         (prevIndex - 1 + images.length) % images.length
//       );
//     };







//   return (

//     <div className="homepage-container">
//            <div className="home-p" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
//                <div className="header">
//                      <div className='logo'>
//                        <img src={logo} alt='book' className="homepage-image"/>
//                      </div>
//                      <nav className='navbar'>
//                           <ul>
//                           <li><a href="#">Project </a></li>
//                           <li><a href="#">Services</a></li>
//                           <li><a href="#">About Us</a></li>
//                           <li><a href="#">Contact us</a></li>
//                           </ul>
//                      </nav>
//     <div>
//         <div className='p-pox'>
//             <hr></hr>
//         <div>
//                <h1>o1</h1>
//             <div>
//               <h2>GLATT Esate</h2>
//               <p>It is a long establihed fact taht a reader will be distracted by the readable content of a page when looin ar uts layout. the point of using Lorem ipsum  </p>
//             </div>
//             <br></br>
//                <h4>+ SEE PROJECT</h4>
//             <br></br>
//             <div>
//                 <ul>
//                     <li> <img src={dot1} alt='book' className="dot-1"/></li>
//                     <li> <img src={dot1} alt='book' className="dot-2"/></li>
//                     <li> <img src={dot1} alt='book' className="dot-3"/></li>
//                 </ul>  
//             </div>
//           </div>
//         </div>
//         <div className='b-nav'>

//           <div>
//               <p>Latest Project</p>
              
//               <h4>MOdern industrial Loft</h4>
//               <p>Year completed 2022</p>
//           </div>
//           <div>
//               <p>Location</p>
          
//               <h4>New York, USA</h4>
//           </div>
//           <div>
//               <h4>Theme & style</h4>
//           </div>
//           <div>
//                 <ul>
//                     <li> <img src={arrow} alt='book' className="dot-1"/></li>
//                     <li> <img src={arrowback} alt='book' className="dot-2"/></li>
//                 </ul>  
//             </div>



//         </div>

//     </div>
//  </div>
//  </div>
//  </div>
        
   
  
   

    
   
//   )
// }

// export default Homepage