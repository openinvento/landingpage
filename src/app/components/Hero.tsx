"use client"

import { useState, useEffect } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function Hero({ title, subtitle, image }: HeroProps) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(subtitle.slice(0, index + 1));
      index++;
      if (index === subtitle.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [subtitle]);

  return (
    <section className="relative flex items-center justify-center min-h-[60vh] overflow-hidden">
      <div className="absolute inset-0 z-0" />
      <div className="relative z-10 text-center px-6 py-16 max-w-2xl mx-auto w-full">
        <img
          className="w-24 h-24 mx-auto rounded-full shadow-lg mb-6 border-4 border-white"
          src={image}
          alt={title}
        />
        <h1 className="text-5xl font-extrabold drop-shadow-lg">{title}</h1>
        <p className="mt-4 text-2xl font-mono">{typedText}<span className="animate-blink">|</span></p>

      </div>

      <style jsx>{`
        .animate-blink {
          display: inline-block;
          width: 1ch;
          animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
