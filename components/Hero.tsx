"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Great_Vibes, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["vietnamese"], weight: "400" });
const playfair = Playfair_Display({ subsets: ["vietnamese"], weight: "400" });

interface TimeLeft {
  [key: string]: number;
}

const calculateTimeLeft = () => {
  const difference = +new Date("2025-07-12") - +new Date();
  let timeLeft: TimeLeft = {};

  if (difference > 0) {
    timeLeft = {
      Ngày: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Giờ: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Phút: Math.floor((difference / 1000 / 60) % 60),
      Giây: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="relative h-screen">
      <Image
        src="/TINK2045-width.JPG?height=1080&width=1920"
        alt="Couple"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-4">
        <div className={greatVibes.className}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-center">
            Đình Trung & Ngọc Trân
          </h1>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl text-center">
          Chúng mình sẽ cưới nhau
        </p>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 text-center">
          12 Tháng bảy, 2025
        </p>
        <div className="mt-8 flex space-x-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {value}
              </div>
              <div className="text-xs sm:text-sm uppercase">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
