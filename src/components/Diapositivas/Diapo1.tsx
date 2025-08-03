// src/components/Diapositivas/Diapo1.tsx
import { useRef } from 'react';

type Props = {
  onStart: () => void;
};

export default function Diapo1({ onStart }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    const elem = containerRef.current;
    if (elem?.requestFullscreen) {
      elem.requestFullscreen();
    }
    onStart(); // Avanza a la siguiente diapositiva
  };

  return (
    <div ref={containerRef} className="slide slide-inicio">
      <img
        src="/img/Presentaciones/CubiertaParapente/1_fondoInicio.jpg"
        alt="Fondo Inicio"
        style={{ width: '100%', height: '100vh', objectFit: 'cover', zIndex: -1 }}
      />
      <div style={{ position: 'absolute', top: '45%', width: '100%', textAlign: 'center' }}>
        <button onClick={handleStart}>Empezar</button>
      </div>
    </div>
  );
}
