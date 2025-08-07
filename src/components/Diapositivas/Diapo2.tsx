// src/components/Diapositivas/Diapo2.tsx
import { useEffect, useRef} from 'react';

type Props = {
  onFinish: () => void;
};

export default function Diapo2({ onFinish }: Props) {
   const videoRef = useRef<HTMLVideoElement>(null);

   useEffect(() => {
  const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => onFinish();
    video.play().catch(() => {
      /* autoplay might be blocked */
    });
    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [onFinish]);

  return (
    <div className="slide">
         <video
        ref={videoRef}
        src="/img/Presentaciones/CubiertaParapente/vInicioPresentacion.mp4"
        autoPlay
        muted
        playsInline
        controls
        style={{ width: '100%' }}
      />
    </div>
  );
}
