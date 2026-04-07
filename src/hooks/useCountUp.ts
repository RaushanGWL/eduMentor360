import { useState, useEffect, useRef, RefObject } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  easing?: 'linear' | 'easeOut' | 'easeIn';
}

interface UseCountUpReturn {
  count: number;
  ref: RefObject<HTMLDivElement>;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function easeInCubic(t: number): number {
  return t * t * t;
}

function linear(t: number): number {
  return t;
}

export function useCountUp({
  end,
  duration = 2000,
  start = 0,
  easing = 'easeOut',
}: UseCountUpOptions): UseCountUpReturn {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  const easingFn =
    easing === 'easeOut' ? easeOutCubic :
    easing === 'easeIn' ? easeInCubic :
    linear;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          observer.unobserve(element);

          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easingFn(progress);
            const currentCount = Math.round(start + (end - start) * easedProgress);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [end, duration, start, easingFn]);

  return { count, ref };
}
