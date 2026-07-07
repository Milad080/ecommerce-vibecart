"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const desktopImages = [
  "/images/slider/desktop-slider-1.png",
  "/images/slider/desktop-slider-2.png",
  "/images/slider/desktop-slider-3.png",
  "/images/slider/desktop-slider-4.png",
];

const mobileImages = [
  "/images/slider/mobile-slider-1.png",
  "/images/slider/mobile-slider-2.png",
  "/images/slider/mobile-slider-3.png",
  "/images/slider/mobile-slider-4.png",
];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % desktopImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + desktopImages.length) % desktopImages.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderCarousel = (images: string[], height: string) => (
    <div className={`relative w-full ${height} overflow-hidden`}>
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-fill"
          />
        </div>
      ))}

      <Button
        variant="outline"
        size="icon"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-none bg-white/80 hover:bg-white"
      >
        <ChevronLeft />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-none bg-white/80 hover:bg-white"
      >
        <ChevronRight />
      </Button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="mb-5">
      {/* Desktop Banner */}
      <div className="hidden sm:block">
        {renderCarousel(desktopImages, "h-[400px]")}
      </div>

      {/* Mobile Banner */}
      <div className="block sm:hidden">
        {renderCarousel(mobileImages, "h-[420px]")}
      </div>
    </div>
  );
};

export default BannerCarousel;
