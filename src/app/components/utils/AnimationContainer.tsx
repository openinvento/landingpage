"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";

interface AnimationContainerProps {
  children: ReactNode | ReactNode[];
  mode?: "fade" | "slide-left" | "slide-right";
  duration?: number; 
  threshold?: number; 
  className?: string;
}

export default function AnimationContainer({
  children,
  mode = "fade",
  duration = 0.8,
  threshold = 0.3,
  className = "",
}: AnimationContainerProps) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>([]);

  const childrenArray = React.Children.toArray(children);
  const childrenCount = childrenArray.length; 


useEffect(() => {
  setVisible(new Array(childrenCount).fill(false));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
        if (entry.isIntersecting && index !== -1) {
          setVisible((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );

  itemRefs.current.forEach((el) => el && observer.observe(el));
  return () => observer.disconnect();
}, [childrenCount, threshold]);


  const getAnimationClass = (isVisible: boolean) => {
    if (!isVisible) return "opacity-0";
    switch (mode) {
      case "fade":
        return "animate-fade-in";
      case "slide-left":
        return "animate-slide-in-left";
      case "slide-right":
        return "animate-slide-in-right";
      default:
        return "";
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {childrenArray.map((child, idx) => (
        <div
          key={idx}
          ref={(el) => { itemRefs.current[idx] = el; }}
          className={`transition-opacity ${getAnimationClass(visible[idx])}`}
          style={{ animationDuration: `${duration}s` }} // <-- dynamische Dauer
        >
          {child}
        </div>
      ))}

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in { animation-name: fadeIn; animation-fill-mode: forwards; animation-timing-function: ease; }
        .animate-slide-in-left { animation-name: slideInLeft; animation-fill-mode: forwards; animation-timing-function: ease; }
        .animate-slide-in-right { animation-name: slideInRight; animation-fill-mode: forwards; animation-timing-function: ease; }
      `}</style>
    </div>
  );
}
