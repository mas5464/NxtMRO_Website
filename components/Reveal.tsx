"use client";
import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Direct geometry check, not just the observer callback: a fast or
    // programmatic scroll (flick, End key, scroll restoration) can jump far
    // enough in one step that IntersectionObserver never reports a
    // threshold crossing, which would otherwise leave this content stuck
    // at opacity 0 forever.
    const isInView = () => {
      const rect = node.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const reveal = () => {
      setVisible(true);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };

    const onScroll = () => {
      if (isInView()) reveal();
    };

    // The observer also reports the initial state, covering content that is
    // already in view on mount.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold: 0 }
    );
    observer.observe(node);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none ${className}`}
    >
      {children}
    </div>
  );
}
