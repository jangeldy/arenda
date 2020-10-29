import { useEffect, useState } from 'react';

export function useMediaType() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.addEventListener('resize', () => {
      let width = document.documentElement.clientWidth;
      if (width <= 743 && !isMobile) {
        setIsMobile(true);
      }
      if (width > 743 && isMobile) {
        setIsMobile(false);
      }
    });
  });
  return { isMobile };
}
