// src/components/Diapositivas/Diapo6.tsx
import { useEffect } from 'react';

type Props = {
  onFinish: () => void;
};

export default function Diapo6({ onFinish }: Props) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 10000); // Duración estimada de lectura
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="slide">
      <h2>Sostenibilidad</h2>
      <p>Contenido sobre sostenibilidad...</p>
    </div>
  );
}
