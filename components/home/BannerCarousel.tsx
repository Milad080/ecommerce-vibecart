"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
const images = [
  "https://placehold.co/1200x400?text=slide+1",
  "https://placehold.co/1200x400?text=slide+2",
  "https://placehold.co/1200x400?text=slide+3",
  "https://placehold.co/1200x400?text=slide+4",
];
const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full h-[400px] overflow-hidden mb-20px">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={src}
            alt={`slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <Button
        variant="outline"
        size="icon"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-4 transform -translate-1/2 text-black rounded-none"
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-4 transform -translate-1/2 text-black rounded-none"
      >
        <ChevronRight size={24} />
      </Button>
      <div className="absolute bottom-4 left-1/2 transform -translate--x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
