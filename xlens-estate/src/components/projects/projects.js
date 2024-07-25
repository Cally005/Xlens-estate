import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import "../projects/projects.css";
import Bedroom from "../../assets/Bedroom.png";
import glatt from "../../assets/glatt.png";
import burum from "../../assets/burum.png";
import iutunu from "../../assets/iutunu.png";
import out2 from "../../assets/out2.png";
import loouge4 from "../../assets/loouge4.png"
import lounge from "../../assets/lounge.png"
import Lounge3 from "../../assets/Lounge3.png"

const Projects = () => {
    const [clickedIndex, setClickedIndex] = useState(null);
    const [selectedImage, setSelectedImage] = useState(Bedroom);
    const [projectCounts, setProjectCounts] = useState({ projects: 0, contractors: 0, awards: 0 });
    const counterRef = useRef(null);
    const observer = useRef(null);
    const animationStarted = useRef(false); // Track if animation has started
  
    const projectItems = [
      { title: '- 3D Floor', image: Bedroom, description: 'Interior designs are classic age when looking at its layout. The point of using Lorem Ipsum.' },
      { title: '- Interior Design', image: lounge, description: 'Interior designs are classic age when looking at its layout. The point of using Lorem Ipsum.' },
      { title: '- Landscape Design', image: Lounge3, description: 'Interior designs are classic age when looking at its layout. The point of using Lorem Ipsum.' },
      { title: '- Product Design', image: loouge4, description: 'Interior designs are classic age when looking at its layout. The point of using Lorem Ipsum.' },
    ];
  
    const handleClick = (index) => {
      setClickedIndex(index);
      setSelectedImage(projectItems[index].image);
    };
  
    const animateCounts = (start, end, duration) => {
      let startTime = null;
  
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = currentTime - startTime;
        const increment = Math.min(progress / duration, 1);
  
        setProjectCounts({
          projects: Math.floor(start.projects + (end.projects - start.projects) * increment),
          contractors: Math.floor(start.contractors + (end.contractors - start.contractors) * increment),
          awards: Math.floor(start.awards + (end.awards - start.awards) * increment)
        });
  
        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };
  
      requestAnimationFrame(animate);
    };
  
    useEffect(() => {
      observer.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (!animationStarted.current) {
              animateCounts(
                { projects: 0, contractors: 0, awards: 0 },
                { projects: 374, contractors: 120, awards: 24 },
                2000
              );
              animationStarted.current = true; // Set to true to indicate animation has started
            } else {
              animateCounts(
                projectCounts, // Start from current count
                { projects: 374, contractors: 120, awards: 24 },
                2000
              );
            }
          } else {
            animationStarted.current = false; // Reset when out of view
          }
        },
        { threshold: 0.5 }
      );
  
      if (counterRef.current) {
        observer.current.observe(counterRef.current);
      }
  
      return () => {
        if (observer.current) {
          observer.current.disconnect();
        }
      };
    }, [projectCounts]);

  return (
    <div className='pro-p'>
      <div className='pro-title'>
        <div className="project-p">
          <div className="film-cover">
            <h1>Projects</h1>
            <div className='pro'>
            <ul>
                {projectItems.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleClick(index)}
                    className={clickedIndex === index ? 'active' : ''}
                  >
                    <h3>{item.title}</h3>
                    <hr className={clickedIndex === index ? 'active' : ''} />
                    {clickedIndex === index && (
                      <p>{item.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='div-2'>
          <h5>+ ALL PROJECTS</h5>
          <img src={selectedImage} alt='book' className="bedroom-image" />
        </div>
      </div>

      <div className='clients'>
        <h1>Our Clients</h1>
        <div className='c-logo'>
          <img src={iutunu} alt='book' className="bedroom-image" />
          <img src={burum} alt='book' className="bedroom-image" />
          <img src={glatt} alt='book' className="bedroom-image" />
        </div>
      </div>

      <div className='com-pro'>
        <div className='team'>
          <p>Our team is very passionate about people’s habits. We study how they live,
            work, play and inhabit the spaces that we have imagined. Studio Arch42 is a 
            connection between nature and people.
          </p>
        </div>
        <div className='com-pro-2'ref={counterRef}>
          <h4>Completed projects in 24 countries</h4>
          <ul>
            <li>
            <h6>{projectCounts.projects}</h6>
              <p>Projects</p>
            </li>
            <li>
            <h6>{projectCounts.contractors}</h6>
              <p>Contractors</p>
            </li>
            <li>
            <h6>{projectCounts.awards}</h6>
              <p>Awards</p>
            </li>
          </ul>
        </div>
        <div className='leas-img'>
          <img src={out2} alt='book' className="bedroom-image" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
