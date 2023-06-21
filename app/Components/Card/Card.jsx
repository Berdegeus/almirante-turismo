"use client"
import React, { useState } from 'react';
import styles from './card.module.css';
import Image from 'next/image';

const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={props.image} alt={props.text} className={styles.image} width={250} height={400}  />
      {isHovered && (
        <>
          <button className={styles.button}>
            <span>{props.text}</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Card;
