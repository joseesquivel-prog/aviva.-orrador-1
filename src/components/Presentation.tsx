// src/components/Presentation.tsx
import { useState } from 'react';
import Diapo1 from './Diapositivas/Diapo1';
import Diapo2 from './Diapositivas/Diapo2';
import Diapo3 from './Diapositivas/Diapo3';
import Diapo4 from './Diapositivas/Diapo4';
import Diapo5 from './Diapositivas/Diapo5';
import Diapo6 from './Diapositivas/Diapo6';
import Diapo7 from './Diapositivas/Diapo7';

export default function Presentation() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    <Diapo1 onStart={() => setSlideIndex(1)} />,
    <Diapo2 onFinish={() => setSlideIndex(2)} />,
    <Diapo3 onFinish={() => setSlideIndex(3)} />,
    <Diapo4 onFinish={() => setSlideIndex(4)} />,
    <Diapo5 onFinish={() => setSlideIndex(5)} />,
    <Diapo6 onFinish={() => setSlideIndex(6)} />,
    <Diapo7 onFinish={() => console.log('Presentación finalizada')} />
  ];

  return <div>{slides[slideIndex]}</div>;
}
