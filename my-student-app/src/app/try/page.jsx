// pages/index.js
"use client";
import { useEffect, useState } from "react";
// import Image from "next/image";

const images = ["💎", "🌍", "🏔️", "🌲"];

const texts = [
  "Welcome to My Website",
  "Enjoy the Beauty of Nature",
  "Explore New Places",
  "Discover the Unknown",
];

export default function page() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <div className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
        {texts[index]}
      </div>
    </div>
  );
}
