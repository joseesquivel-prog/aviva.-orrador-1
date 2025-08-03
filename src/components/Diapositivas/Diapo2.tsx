// src/components/Diapositivas/Diapo2.tsx
import { useEffect } from 'react';

type Props = {
  onFinish: () => void;
};

export default function Diapo2({ onFinish }: Props) {
  useEffect(() => {
    const video = document.getElementById('video-diapo2') as HTMLVideoElement;
    if (video) {
      video.play();
      video.onended = onFinish;
    }
  }, [onFinish]);

  return (
    <div className="slide">
      <video id="video-diapo2" src="/video/video.mp4" controls style={{ width: '100%' }} />
    </div>
  );
}
