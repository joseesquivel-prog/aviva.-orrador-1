// src/components/Diapositivas/Diapo2.tsx
import { useEffect, useRef } from 'react';

type Props = {
  onFinish: () => void;
};

export default function Diapo2({ onFinish }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.addEventListener('ended', onFinish);
      return () => {
        video.removeEventListener('ended', onFinish);
      };
    }
  }, [onFinish]);

  return (
    <div className="slide">
      <video
        ref={videoRef}
        src="/video/video.mp4"
        controls
        style={{ width: '100%' }}
      />
    </div>
  );
}
