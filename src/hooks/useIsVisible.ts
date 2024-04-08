import { useEffect, useRef, useState } from 'react';

export function useIsVisible(
  options: IntersectionObserverInit = {
    rootMargin: '0px 0px -400px 0px',
  }
) {
  const ref: any = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, isVisible];
}
