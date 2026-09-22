import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SliderSectionProps {
  title: string;
  text: string;
  buttonText: string;
  link: string;
  images: string[];
  imagePosition?: 'left' | 'right';
  bgColor?: string;
}

export const SliderSection: React.FC<SliderSectionProps> = ({
  title,
  text,
  buttonText,
  link,
  images,
  imagePosition = 'right',
  bgColor = 'var(--white)'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const textContent = (
    <div className="slider-section-content">
      <h2>{title}</h2>
      <p>{text}</p>
      <Link to={link} className="btn btn-primary">{buttonText}</Link>
    </div>
  );

  const imageSlider = (
    <div className="slider-section-images">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${title} - Image ${index + 1}`}
          className={`slider-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
      <div className="slider-controls">
        <button onClick={goToPrev} aria-label="Previous image">
          <ArrowLeft size={24} />
        </button>
        <button onClick={goToNext} aria-label="Next image">
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );

  return (
    <section className={`slider-section ${imagePosition === 'left' ? 'reverse' : ''}`} style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="slider-section-grid">
          {imagePosition === 'left' ? (
            <>
              {imageSlider}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageSlider}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
