'use client'
import React, { useEffect, useState } from 'react';
import style from './Carousel.module.css'
import Image from 'next/image' 

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      plusSlides(1);
    }, 5000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const plusSlides = (n) => {
    const newIndex = slideIndex + n;
    showSlides(newIndex);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className={style['slideshow-container']}>
      {/* Full-width images with number and caption text */}
      <div className={`${style.mySlides} ${style.fade} ${slideIndex === 1 ? style.active : ''}`}>
        <div className={style.numbertext}>1 / 3</div>
        <Image src="/../public/ex1.png" width={1800} height={334} alt="Slide 1" />
        <div className={style.text}>Caption Text</div>
      </div>

      <div className={`${style.mySlides} ${style.fade} ${slideIndex === 2 ? style.active : ''}`}>
        <div className={style.numbertext}>2 / 3</div>
        <Image src="/../public/ex3.png" width={1800} height={334} alt="Slide 2" />
        <div className={style.text}>Caption Text</div>
      </div>

      <div className={`${style.mySlides} ${style.fade} ${slideIndex === 3 ? style.active : ''}`}>
        <div className={style.numbertext}>3 / 3</div>
        <img src="ex3.png" width={1800} height={334} alt="Slide 3" />
        <div className={style.text}>Caption Text</div>
      </div>

      {/* Next and previous buttons */}
      <a className={style.prev} onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className={style.next} onClick={() => plusSlides(1)}>
        &#10095;
      </a>

      {/* The dots/bullets/indicators */}
      <div style={{ textAlign: 'center' }}>
        <span className={`${style.dot} ${slideIndex === 1 ? style.active : ''}`} onClick={() => currentSlide(1)}></span>
        <span className={`${style.dot} ${slideIndex === 2 ? style.active : ''}`} onClick={() => currentSlide(2)}></span>
        <span className={`${style.dot} ${slideIndex === 3 ? style.active : ''}`} onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Slideshow;

