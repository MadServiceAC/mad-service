import React from "react"

const Technician = ({imageSrc, rating, reviewers, name}) =>
    {
        return(
            <div className="group relative block overflow-hidden rounded-lg shadow-md">
                <img
                    src={imageSrc}
                    alt={name}
                    className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105 sm:h-72"
                />
                 <div className="relative border border-gray-100 bg-white p-8">
                 <div className="flex items-center">
                 {[...Array(5)].map((_, index) => (
                    <svg
                    key={index}
                    className={`w-4 h-4 ${index < Math.floor(rating) ? "text-yellow-300" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                ))}
                    <p className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">{rating}</p>
                    <p className="ms-1.5 text-sm font-medium text-gray-500 dark:text-gray-400">({reviewers} review)</p>
                </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
                    {/* <form className="mt-4 flex justify-end">
                    <button
                        className="text-gray-100 rounded-xl shadow-md bg-blue-600 px-6 py-2 text-sm font-medium transition hover:scale-105"
                    >
                        Detail
                    </button>
                    </form> */}
                </div>
            </div>
        )
    }
    export default Technician