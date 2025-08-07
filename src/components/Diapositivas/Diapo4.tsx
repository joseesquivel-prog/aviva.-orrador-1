// src/components/Diapositivas/Diapo4.tsx
import { useEffect, useState } from 'react';

type Props = {
  onFinish: () => void;
};

export default function Diapo4({ onFinish }: Props) {
   const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(onFinish, 15000); // Tiempo estimado de interacción
    return () => clearTimeout(timer);
  }, [onFinish]);
   const items = [
    {
      src: '/img/Presentaciones/CubiertaParapente/s_GuaduasPila.jpg',
      text: 'Guaduas apiladas',
    },
    {
      src: '/img/Presentaciones/CubiertaParapente/s_GuaduasVerdeAmarillo.jpg',
      text: 'Guaduas verdes y amarillas',
    },
    {
      src: '/img/Presentaciones/CubiertaParapente/s_HojaGuadua.jpg',
      text: 'Hoja de guadua',
    },
    {
      src: '/img/Presentaciones/CubiertaParapente/s_HojasGuadua.jpg',
      text: 'Hojas de guadua',
    },
  ];


  return (
 <div
      className="slide"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            style={{ background: current === index ? '#382148' : undefined }}
            aria-label={`Mostrar imagen ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <img
            src={items[current].src}
            alt=""
            style={{ maxWidth: '60vw', height: '60vh', objectFit: 'contain' }}
        />
        <p>{items[current].text}</p>
      </div>
    </div>
  );
}
