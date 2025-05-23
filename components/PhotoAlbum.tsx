"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const quicksand = Quicksand({
  subsets: ["vietnamese"],
  weight: "600",
  variable: "--font-quicksand",
});

const photos = [
  "/TINK2000.JPG?height=600&width=800",
  "/TINK2023.JPG?height=600&width=800",
  "/TINK2045.JPG?height=600&width=800",
  "/TINK2179.JPG?height=600&width=800",
  "/TINK2258.JPG?height=600&width=800",
  "/TINK2336.JPG?height=600&width=800",
];

export default function PhotoAlbum() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const fullscreenRef = useRef(null);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextPhoto();
    }
    if (isRightSwipe) {
      prevPhoto();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isFullscreen) {
        if (e.key === "ArrowRight") nextPhoto();
        if (e.key === "ArrowLeft") prevPhoto();
        if (e.key === "Escape") toggleFullscreen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, nextPhoto, prevPhoto, toggleFullscreen]);

  return (
    <section id="photos" className={"py-16 bg-white " + quicksand.className}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Ảnh Cưới</h2>
        <div className="relative max-w-3xl mx-auto">
          <Image
            src={photos[currentPhoto] || "/placeholder.svg"}
            alt={`Ảnh ${currentPhoto + 1}`}
            width={800}
            height={600}
            className="rounded-lg shadow-lg cursor-pointer"
            onClick={toggleFullscreen}
          />
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        <p className="text-center mt-4 text-gray-600">
          Ảnh {currentPhoto + 1} / {photos.length}
        </p>
      </div>
      {isFullscreen && (
        <div
          ref={fullscreenRef}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={photos[currentPhoto] || "/placeholder.svg"}
            alt={`Ảnh ${currentPhoto + 1}`}
            layout="fill"
            objectFit="contain"
          />
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          >
            <ChevronLeft className="w-8 h-8 text-gray-800" />
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          >
            <ChevronRight className="w-8 h-8 text-gray-800" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          >
            <X className="w-8 h-8 text-gray-800" />
          </button>
          <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
            Ảnh {currentPhoto + 1} / {photos.length}
          </p>
        </div>
      )}
    </section>
  );
}
