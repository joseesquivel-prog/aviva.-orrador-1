// src/components/Diapositivas/Diapo7.tsx
import { useEffect } from 'react';

type Props = {
  onFinish: () => void;
};

export default function Diapo7({ onFinish }: Props) {
  useEffect(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => {
        onFinish();
      });
    } else {
      onFinish();
    }
  }, [onFinish]);

  return (
    <div className="fondo">
      <h1 className="textoCentrado">Gracias por ver la presentación</h1>
    </div>
  );
}
