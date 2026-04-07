import { useState, useEffect, useCallback } from 'react';

interface ScrollPosition {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolled: boolean;
  isAtTop: boolean;
}

export function useScrollPosition(threshold = 80): ScrollPosition {
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    setScrollDirection(currentScrollY > prevScrollY ? 'down' : 'up');
    setPrevScrollY(currentScrollY);
    setScrollY(currentScrollY);
  }, [prevScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return {
    scrollY,
    scrollDirection,
    isScrolled: scrollY > threshold,
    isAtTop: scrollY === 0,
  };
}

// Hook for tracking active nav section based on scroll position
export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        if (!id) continue;
        const element = document.getElementById(id.replace('#', ''));
        if (element && element.offsetTop <= scrollY) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
}
