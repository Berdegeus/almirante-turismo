"use client";
import Image from 'next/image';
import styles from './Carousel.module.css';
import { useState } from 'react';
const images = [
  'ex1.png',
  'ex2.png',
  'ex3.png',
];
const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const goToNextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={goToPreviousImage}>Previous</button>
      <Image src={images[currentImage]} alt="Carousel" width={100} height={100} />
      <button onClick={goToNextImage}>Next</button>
    </div>
  );
};


export default ImageCarousel;
