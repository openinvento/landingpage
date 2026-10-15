"use client";
import React, { useState } from "react";
import AnimationContainer from "./utils/AnimationContainer";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimationContainer mode="fade" duration={1}>
    <section className="py-16 bg-white" id="faq">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-2xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-semibold text-lg">{item.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Animated content */}
            <div
              className={`transition-all duration-200 ease-in-out ${
                openIndex === idx
                  ? "max-h-40 opacity-100 px-6 pb-4"
                  : "max-h-0 opacity-0 px-6 pb-0"
              } overflow-hidden`}
            >
              <p className="text-gray-700">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </AnimationContainer>
  );
}
