import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

export const useComponentHeight = (ref: RefObject<HTMLElement>) => {
  const [height, setHeight] = useState(800);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const updateHeight = () => {
      setHeight(element.offsetHeight);
    };

    // Set initial height
    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);

  return height;
};
