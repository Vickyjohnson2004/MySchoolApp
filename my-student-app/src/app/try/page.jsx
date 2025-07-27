"use client";
import { useEffect, useState } from "react";

const images = [
  "/file.svg",
  "/global.svg",
  "/next.svg",
  "/vercel.svg",
  "/window.svg",
];

const texts = [
  "Welcome to My Website",
  "Enjoy the Beauty of Nature",
  "Explore New Places",
  "Discover the Unknown",
  "Stay Curious",
];

export default function Page() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((e) => (e + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen background-contain w-screen bg-cover bg-center flex items-center justify-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <div className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg bg-black/50 p-4 rounded-lg">
        {texts[index]}
      </div>
    </div>
  );
}
