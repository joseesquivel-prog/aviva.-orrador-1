// src/components/Diapositivas/Diapo3.tsx
import { useEffect } from 'react';
import PresentacionSlider from '../PresentacionSlider';

type Props = {
  onFinish: () => void;
};

export default function Diapo3({ onFinish }: Props) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 16000); // 3 imágenes x 5s + margen
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="slide">
      <PresentacionSlider />
    </div>
  );
}
