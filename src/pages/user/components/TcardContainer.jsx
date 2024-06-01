import React, { useState } from "react";
import Technician from "../../../components/cards/technician/Technician";

const TcardContainer = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCards.map((card, index) => (
          <Technician key={index} {...card} />
        ))}
      </div>
      <div className="flex gap-6 justify-center mx-auto mt-6">
        <button
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
          className={`inline-block rounded-full border border-button bg-button text-gray-900 p-2 hover:bg-yellow-200 focus:outline-none focus:ring ${
            currentIndex === 0 ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          <span className="sr-only">Previous</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button
          onClick={handleNextClick}
          disabled={currentIndex === cards.length - 3}
          className={`inline-block rounded-full border border-button bg-button text-gray-900 p-2 hover:bg-yellow-200 focus:outline-none focus:ring ${
            currentIndex === cards.length - 3 ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          <span className="sr-only">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TcardContainer;
