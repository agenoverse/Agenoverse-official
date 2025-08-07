import React, { useState } from "react";

type Slide = {
  imageUrl: string | undefined;
  title: string;
};

type HeroCarouselProps = {
  slides: Slide[];
};

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!slides || slides.length === 0) return null;

  const isSingleImage = slides.length === 1;

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden  md:h-96">
        {isSingleImage ? (
          <img
            src={slides[0].imageUrl}
            alt={slides[0].title}
            className="block w-full h-full object-cover"
          />
        ) : (
          slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="block w-full h-full object-cover"
              />
              <div className="absolute bottom-0 bg-black/50 w-full text-center py-2 text-white font-semibold text-lg">
                {slide.title}
              </div>
            </div>
          ))
        )}
      </div>

      {!isSingleImage && (
        <>
          {/* Indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-gray-400"
                }`}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={goToPrev}
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
              <svg
                className="w-4 h-4 text-white rtl:rotate-180"
                fill="none"
                viewBox="0 0 6 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </span>
          </button>

          <button
            onClick={goToNext}
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
              <svg
                className="w-4 h-4 text-white rtl:rotate-180"
                fill="none"
                viewBox="0 0 6 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default HeroCarousel;
