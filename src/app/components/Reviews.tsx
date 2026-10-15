import React from "react";
import AnimationContainer from "./utils/AnimationContainer";

interface Review {
  name: string;
  avatar: string;
  text: string;
  rating: number;
}

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <AnimationContainer mode="slide-left">
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <h2 className="text-3xl font-bold text-center mb-10">Reviews</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full mb-4 border-2 border-purple-400" />
            <h3 className="font-semibold mb-2">{review.name}</h3>
            <div className="flex mb-2">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-600 text-center">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
    </AnimationContainer>
  );
}
