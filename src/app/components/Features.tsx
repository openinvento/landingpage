"use client";

import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  QueueListIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import AnimationContainer from "./utils/AnimationContainer";

interface FeatureItem {
  title: string;
  description: string;
  icon:
    | "CloudArrowUpIcon"
    | "LockClosedIcon"
    | "QueueListIcon"
    | "ShieldCheckIcon";
}

interface FeaturesProps {
  items: FeatureItem[];
}

const iconMap = {
  CloudArrowUpIcon,
  LockClosedIcon,
  QueueListIcon,
  ShieldCheckIcon,
};

export default function Features({ items }: FeaturesProps) {
  return (
    <AnimationContainer mode="fade" threshold={0.2}duration={1}>
    <section className="py-24 bg-gray-50 dark:bg-gray-900" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
            Features
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            OpenInvento
          </p>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            Openinvento - Your inventory manager
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:gap-y-16">
            {items.map((feature, idx) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={idx}
                  className="relative flex items-start sm:items-center"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 dark:bg-indigo-500 shadow-sm">
                      {Icon && (
                        <Icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </div>

                  <div className="ml-6">
                    <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </dt>
                    <dd className="mt-2 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
    </AnimationContainer>
  );
}
