import React from 'react';

const Base = ({ images, currentIndex, prevSlide, nextSlide }) => {
  return (
    <div className="carousel-container relative overflow-hidden max-w-6xl">
      <div className="carousel flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-item flex-shrink-0 w-1/3 p-2 transform transition-transform hover:-translate-y-2"
          >
            <img
              src={image}
              alt={`carousel-${index}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-0 left-0 z-5 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-0 right-0 z-5 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4L1 1"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: images.length - 2 }).map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Base;
