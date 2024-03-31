import { useEffect, useRef, useState } from 'react';

export function useIsVisible() {
  const ref: any = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsVisible(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.unobserve(ref.current);
    };
  }, [ref]);

  return [ref, isVisible];
}
