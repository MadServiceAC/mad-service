import React, { useState } from 'react';
import Base from './base/Base';
import carousel1 from '../../assets/container-img/carousel-1.png';
import carousel2 from '../../assets/container-img/carousel-2.png';
import carousel3 from '../../assets/container-img/carousel-3.png';

const images = [
  carousel1,
  carousel2,
  carousel3,
  carousel1,
  carousel2,
  carousel3,
];

const CarouselContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <Base
      images={images}
      currentIndex={currentIndex}
      prevSlide={prevSlide}
      nextSlide={nextSlide}
    />
  );
};

export default CarouselContainer;
