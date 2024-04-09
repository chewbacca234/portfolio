import { useEffect, useRef, useState } from 'react';

type UseVisibleOptions = {
  rootMargin?: string;
  freezeOnceVisible?: boolean;
};

export function useIsVisible({
  rootMargin = '0px',
  freezeOnceVisible = false,
}: UseVisibleOptions = {}) {
  const ref: any = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const frozen = isVisible && freezeOnceVisible;

  // console.log('[UseIsVisible]', {
  //   ref: ref.current,
  //   freezeOnceVisible,
  //   isVisible,
  //   frozen,
  // });

  useEffect(() => {
    if (!ref) {
      return;
    }

    if (frozen) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [frozen]);

  return [ref, isVisible];
}
