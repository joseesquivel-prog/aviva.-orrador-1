// src/components/PresentacionSlider.tsx
import { useCallback, useEffect, useState } from 'react';
import '../styles/presentacionSlider.css';

const images = [
  '/img/Presentaciones/CubiertaParapente/0_frontal.jpg',
  '/img/Presentaciones/CubiertaParapente/0_lateral.jpg',
  '/img/Presentaciones/CubiertaParapente/0_tejido.jpg',
  '/img/Presentaciones/CubiertaParapente/0_union.jpg',
  '/img/Presentaciones/CubiertaParapente/0_borde.jpg',
  '/img/Presentaciones/CubiertaParapente/0_esquina.jpg',
  '/img/Presentaciones/CubiertaParapente/0_esquina2.jpg',
  '/img/Presentaciones/CubiertaParapente/1_fondoInicio.jpg',
  '/img/Presentaciones/CubiertaParapente/3_frontal.jpg',
  '/img/Presentaciones/CubiertaParapente/3_frontal.png',
  '/img/Presentaciones/CubiertaParapente/3_fontalGente.jpg',
  '/img/Presentaciones/CubiertaParapente/3_lateral.jpg',
  '/img/Presentaciones/CubiertaParapente/3_esquina1.jpg',
  '/img/Presentaciones/CubiertaParapente/3_union.jpg',
  '/img/Presentaciones/CubiertaParapente/3_tejido1.jpg',
  '/img/Presentaciones/CubiertaParapente/3_tejido2.jpg',
  '/img/Presentaciones/CubiertaParapente/3_tejido3.jpg',
  '/img/Presentaciones/CubiertaParapente/4_frontal.jpg',
  '/img/Presentaciones/CubiertaParapente/4_lateral.jpg',
  '/img/Presentaciones/CubiertaParapente/4_planta.jpg',
  '/img/Presentaciones/CubiertaParapente/4_perspectiva.jpg',
  '/img/Presentaciones/CubiertaParapente/7_fondo.jpg',
  '/img/Presentaciones/CubiertaParapente/m1_estructura.jpg',
  '/img/Presentaciones/CubiertaParapente/m2_fijacion.jpg',
  '/img/Presentaciones/CubiertaParapente/m3_tejido.jpg',
  '/img/Presentaciones/CubiertaParapente/m4_borde.jpg',
  '/img/Presentaciones/CubiertaParapente/m5_camilla.jpg',
  '/img/Presentaciones/CubiertaParapente/m6_acabado.jpg',
  '/img/Presentaciones/CubiertaParapente/s_GuaduasPila.jpg',
  '/img/Presentaciones/CubiertaParapente/s_GuaduasVerdeAmarillo.jpg',
  '/img/Presentaciones/CubiertaParapente/s_HojaGuadua.jpg',
  '/img/Presentaciones/CubiertaParapente/s_HojasGuadua.jpg',
];

const PresentacionSlider = () => {
  const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
   }, [nextSlide]);

  return (
    <div className="slider-container">
      {images.map((src, index) => (
        <div
            className={`slider-slide fade ${index === current ? 'active' : ''}`}
          key={index}
          style={{ display: index === current ? 'block' : 'none' }}
        >
          <img src={src} alt="" style={{ width: '100%' }} />
        </div>
      ))}

       <button
        className="prev"
        onClick={prevSlide}
        aria-label="Diapositiva anterior"
      >
        &#10094;
         </button>
      <button
        className="next"
        onClick={nextSlide}
        aria-label="Diapositiva siguiente"
      >
        &#10095;
       </button>

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
