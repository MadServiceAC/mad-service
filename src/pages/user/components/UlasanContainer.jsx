import React, {useState} from "react"
import Review from '../../../components/cards/review/Review'

const UlasanContainer = ({reviews}) =>
    {
        const [currentIndex, setCurrentIndex] = useState(0);

        const handlePrevClick = () => {
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
          );
        };
      
        const handleNextClick = () => {
          setCurrentIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
          );
        };
      
        const visibleCards = reviews.slice(currentIndex, currentIndex + 4);

        return(
            <div className="relative">
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {visibleCards.map((card, index) => (
                <Review key={index} {...card} />
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
                    disabled={currentIndex === reviews.length - 4}
                    className={`inline-block rounded-full border border-button bg-button text-gray-900 p-2 hover:bg-yellow-200 focus:outline-none focus:ring ${
                        currentIndex === reviews.length - 4 ? "cursor-not-allowed opacity-50" : ""
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
        )
    }

    export default UlasanContainer