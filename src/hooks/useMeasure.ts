import { useEffect, useState, type RefObject } from "react";

export function useMeasure(ref: RefObject<HTMLElement | null>) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setShown(true);
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -4% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);

  return shown;
}
