'use client';
import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
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
    const windowSizeHandler = () => {
      setWindowSize({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      });
    };
    window.addEventListener('resize', windowSizeHandler);

    return () => {
      window.removeEventListener('resize', windowSizeHandler);
    };
  }, []);

  return { windowSize, screenType };
};
