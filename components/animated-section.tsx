"use client";

import { cn } from "@/lib/cn";
import { useState, useEffect, useRef } from "react";

function useIntersectionObserver() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return [ref, isVisible] as const;
}

export function AnimatedSection({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
}) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={cn(
        !isVisible ? "opacity-0" : `animate-${animation}`,
        className
      )}
      style={{
        animationDelay: delay > 0 ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}
