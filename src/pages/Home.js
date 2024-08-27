import React, { useEffect, useRef, useState, useCallback } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SideNav from '../components/sidenav';
import '../styles/home.css';
import transition from '../transition';
import usePreventActions from '../hooks/usePreventActions';
import { slides, slideContents } from '../data/sliderData';


const Home = () => {
  usePreventActions();
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeRunning = 3000;
  const timeAutoNext = 7000;
  const autoNextRef = useRef(null);

  const showSlider = useCallback((type) => {
    if (isAnimating || !sliderRef.current || !thumbnailRef.current || !carouselRef.current) return;

    setIsAnimating(true);
    const sliderItemsDom = sliderRef.current.children;
    const thumbnailItemsDom = thumbnailRef.current.children;

    if (type === 'next') {
      sliderRef.current.appendChild(sliderItemsDom[0].cloneNode(true));
      thumbnailRef.current.appendChild(thumbnailItemsDom[0].cloneNode(true));
      carouselRef.current.classList.add('next');
    } else {
      sliderRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1].cloneNode(true));
      thumbnailRef.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1].cloneNode(true));
      carouselRef.current.classList.add('prev');
    }

    setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.classList.remove('next', 'prev');
      }
      if (type === 'next') {
        sliderRef.current.removeChild(sliderItemsDom[0]);
        thumbnailRef.current.removeChild(thumbnailItemsDom[0]);
      } else {
        sliderRef.current.removeChild(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailRef.current.removeChild(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      }
      setIsAnimating(false);
    }, timeRunning);

    clearTimeout(autoNextRef.current);
    autoNextRef.current = setTimeout(() => showSlider('next'), timeAutoNext);
  }, [isAnimating, timeRunning, timeAutoNext]);

  useEffect(() => {
    autoNextRef.current = setTimeout(() => showSlider('next'), timeAutoNext);
    return () => clearTimeout(autoNextRef.current);
  }, [showSlider, timeAutoNext]);

  return (
    <div>
      <Header />
      <SideNav />
      <Footer />
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={sliderRef}>
          {slides.map((slide, index) => (
            <div className="item" key={index}>
              <img src={slide} alt={`slider ${index + 1}`} />
              <div className="content">
                <div className="author">{slideContents[index].client}</div>
                <div className="topic">{slideContents[index].type}</div>
                <div className="des">{slideContents[index].desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="thumbnail" ref={thumbnailRef}>
        {slides.map((slide, index) => (
          <div className="item" key={index}>
            <img src={slide} alt={`thumbnail ${index + 1}`} />
            <div className="content">
              <div className="title">{slideContents[index].client}</div>
              <div className="description">{slideContents[index].type}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button onClick={() => showSlider('prev')}>&lt;</button>
        <button onClick={() => showSlider('next')}>&gt;</button>
      </div>

      <div className="time"></div>
    </div>
  );
};

export default transition(Home);