"use client";

import React from "react";
import AnimationContainer from "./utils/AnimationContainer";

interface Screenshot {
  src: string;
  title: string;
  description: string;
}

interface AppScreenshotsProps {
  screenshots: Screenshot[];
}

export default function AppScreenshots({ screenshots }: AppScreenshotsProps) {
  return (
    <section className="py-16 bg-gray-50 w-11/12 mx-auto mt-10 rounded-3xl" id="screenshots">
      <h2 className="text-3xl font-bold text-center mb-12">
        App Screenshots & Features
      </h2>

      <AnimationContainer mode="slide-left" className="flex flex-col gap-16 max-w-5xl mx-auto">
        {screenshots.map((shot, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center md:justify-between gap-6
                ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <img
                src={shot.src}
                alt={shot.title}
                className="w-11/12 md:w-5/12 rounded-xl shadow-lg object-cover"
              />
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">{shot.title}</h3>
                <p className="text-gray-600">{shot.description}</p>
              </div>
            </div>
          );
        })}
      </AnimationContainer>
    </section>
  );
}
