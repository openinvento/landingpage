"use client";
import React from "react";

interface FooterProps {
  iosLink: string;
  androidLink: string;
  appName: string;
}

export default function Footer({ iosLink, androidLink, appName }: FooterProps) {
  return (
    <footer className="relative bg-blue-950 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">{appName}</h3>
          <p className="text-sm text-blue-200 mt-1">
            OpenInvento
          </p>
        </div>

      </div>

      {/* Bottom section */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-blue-300">
        <p>© {new Date().getFullYear()} {appName}. All rights reserved. This is only a private hobby project.</p>
      </div>

      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-800/10 to-transparent"
      />
    </footer>
  );
}
