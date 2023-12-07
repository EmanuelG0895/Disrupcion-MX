"use client";
import { useState } from 'react';
import "./header.css"
const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < monthNames.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const slideStyle = {
    transform: `translateX(-${currentIndex * slideWidth}px)`
  };

  const handleSlideWidth = (ref) => {
    if (ref) {
      setSlideWidth(ref.offsetWidth);
    }
  };

  return (
    <div className="slider-container container-flex">
      <div className="slider-track" style={slideStyle}>
        {monthNames.map((month, index) => (
          <div className="slider-item" key={index} ref={(ref) => handleSlideWidth(ref)}>
            <h2>{month}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
