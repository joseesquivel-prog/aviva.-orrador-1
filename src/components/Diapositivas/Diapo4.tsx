// src/components/Diapositivas/Diapo4.tsx
import { useEffect } from 'react';

type Props = {
  onFinish: () => void;
};

export default function Diapo4({ onFinish }: Props) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 15000); // Tiempo estimado de interacción
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="slide">
      {/* Aquí tu lógica de botones y textos */}
      <h2>Botones interactivos</h2>
    </div>
  );
}
