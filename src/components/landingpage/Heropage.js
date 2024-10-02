import React from 'react';
import ImageSlider from './imagesSlider';
const HeroSection = () => {
  const images = ["/images/Banner.gif"];

  return (
    <div>
      <h1>Hero Section</h1>
      <ImageSlider imageUrls={images} />
    </div>
  );
};

export default HeroSection;
