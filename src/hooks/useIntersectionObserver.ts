import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useIntersectionObserver<T extends Element>(
  options: IntersectionOptions = {}
): [RefObject<T>, boolean] {
  const { triggerOnce = true, threshold = 0.1, rootMargin = '0px', ...rest } = options;
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) observer.unobserve(element);
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin, ...rest }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, rest]);

  return [ref, isIntersecting];
}

// Convenience hook that returns just the ref and isIntersecting
export function useAnimateOnScroll(options?: IntersectionOptions) {
  return useIntersectionObserver<HTMLDivElement>(options);
}
