// src/hooks/useMultiGradientBackground.ts
import { useEffect } from 'react';

function hexToRgb(hex: string): number[] {
  return hex.match(/\w\w/g)?.map(x => parseInt(x, 16)) ?? [0, 0, 0];
}

function rgbToHex(rgb: number[]): string {
  return '#' + rgb.map(c => c.toString(16).padStart(2, '0')).join('');
}

function interpolateColor(c1: string, c2: string, t: number): string {
  const r1 = hexToRgb(c1);
  const r2 = hexToRgb(c2);
  const result = r1.map((c, i) => Math.round(c + (r2[i] - c) * t));
  return rgbToHex(result);
}

export function useMultiGradientBackground(
  selector: string,
  color1: string,
  color2: string,
  count: number
) {
  useEffect(() => {
    const step = 1 / count;
    const gradients: string[] = [];

    for (let i = 0; i < count; i++) {
      const t1 = i * step;
      const t2 = (i + 1) * step;
      const cStart = interpolateColor(color1, color2, t1);
      const cEnd = interpolateColor(color1, color2, t2);
      const p1 = Math.round(t1 * 100);
      const p2 = Math.round(t2 * 100);

      gradients.push(`linear-gradient(to bottom, ${cStart} ${p1}%, ${cEnd} ${p2}%)`);
    }

    const background = gradients.reverse().join(', ');
    const element = document.querySelector<HTMLElement>(selector);

    if (element) {
      element.style.backgroundImage = background;
      element.style.backgroundBlendMode = 'normal';
    }

    return () => {
      if (element) element.style.backgroundImage = '';
    };
  }, [selector, color1, color2, count]);
}
