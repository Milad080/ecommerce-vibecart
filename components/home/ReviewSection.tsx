"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React from "react";
import { CiInstagram } from "react-icons/ci";

const reviews = [
  {
    id: 1,
    name: "Elmira Khakpoor",
    instagram: "Elmira_khakpoor",
    image: "https://placehold.co/200×200",
    rating: 5,
    text: "VIBECART has set a new standard in the fragrance market, offeri",
  },
  {
    id: 2,
    name: "Shabnam Shabani",
    instagram: "shabdar_.sh",
    image: "https://placehold.co/200×200",
    rating: 5,
    text: "Amazed by the lasting power of these scents. VIBECART provides",
  },
  {
    id: 3,
    name: "sadaf Zarrin",
    instagram: "zarinm_sadaf",
    image: "https://placehold.co/200×200",
    rating: 5,
    text: "Amazed by the lasting power of these scents. lasting provides",
  },
  {
    id: 4,
    name: "Rahman Ghavidel",
    instagram: "Rahman_92_ghavidel",
    image: "https://placehold.co/200×200",
    rating: 5,
    text: "Amazed by the lasting power of these scents. power provides",
  },
];
const ReviewSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrolPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="mb-12 heading text-center">
        WHAT OUR CUSTOMERS HAVE TO SAY
      </h2>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review) => (
              <div key={review.id} className="flex-[0_0_100%] min-w-0 px-4">
                <div className="bg-white rounded-lg p-6 flex flex-col items-center">
                  <img
                    src={review.image}
                    alt={`${review.name}'s profile`}
                    className="w-24 h-24 rounded-full mb-6 object-cover"
                  />
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i: number) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-center mb-6 text-lg">{review.text}</p>
                  <p className="font-semibold mb-1 text-xl">{review.name}</p>
                  <p className="flex text-gray-600 justify-center items-center gap-0">
                    <CiInstagram size={15} />
                    {review.instagram}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrolPrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-transparent rounded-full p-2"
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-transparent rounded-full p-2"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
