// src/components/PresentacionSlider.tsx
import { useEffect, useState } from 'react';
import '../styles/presentacionSlider.css';

const images = [
  '/img/presentaciones/3_frontal.jpg',
  '/img/presentaciones/4_lateral.jpg',
  '/img/presentaciones/4_planta.jpg',
];

const PresentacionSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {images.map((src, index) => (
        <div
          className={`slide fade ${index === current ? 'active' : ''}`}
          key={index}
          style={{ display: index === current ? 'block' : 'none' }}
        >
          <img src={src} alt="" style={{ width: '100%' }} />
        </div>
      ))}

      <a className="prev" onClick={prevSlide}>
        &#10094;
      </a>
      <a className="next" onClick={nextSlide}>
        &#10095;
      </a>

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicadorSlide ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PresentacionSlider;
