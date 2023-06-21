"use client"
import React, { useState } from 'react';
import styles from './card.module.css';

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
      <img src={props.image} alt="Card" className={styles.image} />
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
