'use client';
import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    innerHeight: typeof window !== 'undefined' ? window.innerHeight : 0,
    innerWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
  });

  const screenType: 'XL-screens' | 'L-screens' | 'M-screens' | 'S-screens' =
    windowSize.innerWidth >= 1200
      ? 'XL-screens'
      : windowSize.innerWidth >= 992
      ? 'L-screens'
      : windowSize.innerWidth >= 768
      ? 'M-screens'
      : 'S-screens';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const windowSizeHandler = () => {
      setWindowSize({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      });
    };

    window.addEventListener('resize', windowSizeHandler);
    return () => window.removeEventListener('resize', windowSizeHandler);
  }, []);

  return { windowSize, screenType };
};
