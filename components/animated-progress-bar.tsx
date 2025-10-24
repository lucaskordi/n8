"use client";

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

export function AnimatedProgressBar({
  label,
  percentage,
  delay = 0,
}: {
  label: string;
  percentage: number;
  delay?: number;
}) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="font-new-black text-xs md:text-sm font-normal text-gray-700">
          {label}
        </span>
        <span className="font-new-black text-xs md:text-sm font-normal text-gray-700">
          {percentage}%
        </span>
      </div>
      <div
        ref={ref}
        className="w-full bg-gray-200 rounded-full h-2 overflow-hidden"
      >
        <div
          className={`bg-[#3E0D11] h-2 rounded-full ${
            isVisible ? "animate-progress-grow" : "w-0"
          }`}
          style={
            {
              "--target-width": `${percentage}%`,
              animationDelay: delay > 0 ? `${delay}ms` : undefined,
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
}
