// src/components/Diapositivas/Diapo5.tsx
import { useEffect } from 'react';

type Props = {
  onFinish: () => void;
};

export default function Diapo5({ onFinish }: Props) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 12000); // Tiempo aproximado de la secuencia
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="slide">
      {/* Secuencia visual progresiva */}
      <h2>Secuencia Visual</h2>
    </div>
  );
}
