// src/components/Home.js
import React from 'react';
import Header from '../components/header';
import DarkSideNav from '../components/darksidenav';
import DarkFooter from '../components/darkfooter';
import transition from '../transition';
import '../styles/aboutus.css';
import usePreventActions from '../hooks/usePreventActions';

const AboutUs = () => {
  usePreventActions();
  return (
    <div>
      <Header />
      <DarkSideNav></DarkSideNav>
      <div className='aboutus_section'>
        <div className='aboutus-text'>
          <h1>
            Cinefirm <br />
            A Photography & <br />
            Videography company.
          </h1>
          <p>
          We are dedicated artists, driven by our passion for photography & videography. With unwavering confidence in our work and the ability to adapt to challenging conditions, we embrace every project with enthusiasm and creativity.
          </p>
        </div>

    
        <div className='aboutus-grid'>
         
      
          
        </div>
      </div>
      <DarkFooter />
    </div>
  );
};

export default transition(AboutUs);
