import React, { useState, useEffect } from 'react';
import AppRoutes from './routes';
import './styles/global.css';
import SplashScreen from './components/SplashScreen';
import BackgroundImage from './res/background.webp';
import FaviconDark from './res/BLACK_CINEFIRM_.png';
import FaviconLight from './res/CINEFIRM_WHITE.png';

// Main Slider
import Slider1 from './res/slider/1.webp';
import Slider2 from './res/slider/2.webp';
import Slider3 from './res/slider/3.webp';
import Slider4 from './res/slider/4.webp';
import Slider5 from './res/slider/5.webp';


import Slider6 from './res/slider/6.webp';
import Slider7 from './res/slider/7.webp';
import Slider8 from './res/slider/8.webp';
import Slider9 from './res/slider/9.webp';
import Slider10 from './res/slider/10.webp';

import Slider11 from './res/slider/11.webp';
import Slider12 from './res/slider/12.webp';
import Slider13 from './res/slider/13.webp';
import Slider14 from './res/slider/14.webp';
import Slider15 from './res/slider/15.webp';



// Portfolio
import Portfolio1 from './res/portfolio/FashionPhotography.webp';
import Portfolio2 from './res/portfolio/frenzy.webp';
import Portfolio3 from './res/portfolio/Mewar.webp';
import Portfolio4 from './res/portfolio/wedding.webp';
import Portfolio5 from './res/portfolio/yuki.webp';
import Portfolio6 from './res/portfolio/biryani.webp';
import Portfolio7 from './res/portfolio/lovestory.webp';
import Portfolio8 from './res/portfolio/shezwan.webp';
import Portfolio9 from './res/portfolio/fashionphotography2.webp';

// SoftBox
import SoftBox from './res/Softbox.webp';



// Function to preload images
const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          console.log(`Image loaded: ${url}`);
          resolve();
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${url}`);
          reject(new Error(`Failed to load image: ${url}`));
        };
      });
    })
  );
};


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload images
    preloadImages([
      BackgroundImage,
      FaviconDark,
      FaviconLight,
      Slider1,
      Slider2,
      Slider3,
      Slider4,
      Slider5,
      Slider11,
      Slider6,
      Slider7,
      Slider8,
      Slider9,
      Slider10,
      Slider12,
      Slider13,
      Slider14,
      Slider15,
      Portfolio1,
      Portfolio2,
      Portfolio3,
      Portfolio4,
      Portfolio5,
      Portfolio6,
      Portfolio7,
      Portfolio8,
      Portfolio9,
      SoftBox
      // Add more image URLs here if needed
    ])
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
        setLoading(false); // Ensure the app still loads if an image fails to preload
      });
  }, []);

  return (
    <div>
      {loading ? (
        <SplashScreen />
      ) : (
        <AppRoutes />
      )}
    </div>
  );
}

export default App;
