"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Corinthia, Merriweather } from "next/font/google";
import Header from "./Header";

const merriweather = Merriweather({
  subsets: ["vietnamese"],
  weight: "400",
});

const corinthia = Corinthia({
  subsets: ["vietnamese"],
  weight: "400",
  variable: "--font-imperial-script",
});

interface TimeLeft {
  [key: string]: number;
}

const calculateTimeLeft = () => {
  const difference = +new Date("2025-07-12T18:00:00+07:00") - +new Date();
  let timeLeft: TimeLeft = {};

  if (difference > 0) {
    timeLeft = {
      Ngày: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Giờ: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Phút: Math.floor((difference / 1000 / 60) % 60),
      Giây: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = {
      Ngày: 0,
      Giờ: 0,
      Phút: 0,
      Giây: 0,
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
      <Header />
      <Image
        src="/TINK2121-width.jpg?height=1080&width=1920"
        alt="Couple"
        layout="fill"
        objectFit="cover"
        className="z-0"
        style={{ objectPosition: "center bottom" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <div
        className="absolute inset-0 flex flex-col items-center justify-end text-white z-20"
        style={{ bottom: "20px" }}
      >
        <div className={corinthia.className}>
          <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold mb-4 text-center">
            Đình Trung & Ngọc Trân
          </h1>
        </div>
        <div className={merriweather.className + " mt-4"}>
          <p className="text-xl sm:text-2xl md:text-3xl text-center">
            Sắp về chung một nhà
          </p>
          <p className="text-sm sm:text-xs md:text-xl mt-4 text-center">
            18:00 - Ngày 12 Tháng 07 Năm 2025
          </p>

          <div className="mb-16 flex space-x-4 justify-center">
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
      </div>
    </section>
  );
}
