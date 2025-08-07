// src/components/Diapositivas/Diapo5.tsx
import { useEffect,useState } from 'react';

type Props = {
  onFinish: () => void;
};

export default function Diapo5({ onFinish }: Props) {
    const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(onFinish, 12000); // Tiempo aproximado de la secuencia
    return () => clearTimeout(timer);
  }, [onFinish]);

  const steps = [
    { src: '/img/Presentaciones/CubiertaParapente/m1_estructura.jpg', text: 'Estructura' },
    { src: '/img/Presentaciones/CubiertaParapente/m2_fijacion.jpg', text: 'Fijación' },
    { src: '/img/Presentaciones/CubiertaParapente/m3_tejido.jpg', text: 'Tejido' },
    { src: '/img/Presentaciones/CubiertaParapente/m4_borde.jpg', text: 'Borde' },
    { src: '/img/Presentaciones/CubiertaParapente/m5_camilla.jpg', text: 'Camilla' },
    { src: '/img/Presentaciones/CubiertaParapente/m6_acabado.jpg', text: 'Acabado' },
  ];

  return (
        <div
      className="slide"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            style={{ background: index <= current ? '#382148' : undefined }}
            aria-label={`Paso ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{ position: 'relative', width: '60vw', height: '60vh', margin: '0 auto' }}
        >
          {steps.map((step, index) => (
            <img
              key={index}
              src={step.src}
              alt=""
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                opacity: index <= current ? 1 : 0,
                transition: 'opacity 0.3s ease',
              }}
            />
          ))}
        </div>
        <p>{steps[current].text}</p>
      </div>
    </div>
  );
}
