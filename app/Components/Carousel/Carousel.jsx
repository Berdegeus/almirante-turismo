"use client"
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Carousel.module.css';
import Image from 'next/image';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(goToNextImage, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <div className={styles.imageContainer}>
          <Image src={images[currentImageIndex]} alt="Carousel" width={1760} height={300}/>
        </div>
        <div className={styles.arrowContainer}>
          <button className={styles.arrowButton} onClick={goToPreviousImage}>
            <FaChevronLeft />
          </button>
          <button className={styles.arrowButton} onClick={goToNextImage}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
