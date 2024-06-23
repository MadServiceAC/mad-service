import React from "react"

const Review = ({name, time, rating, content}) =>
    {
        return(
            <blockquote className="rounded-lg bg-white shadow-md p-6 shadow-md sm:p-8">
                <div className="flex items-center gap-4 mb-2">
                <img
                    alt={name}
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="size-14 rounded-full object-cover"
                />

                <div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">{name}</p>
                    <p className="mt-0.5 text-md font-normal text-gray-600">{time}</p>
                </div>
                </div>
                <div className="flex justify-center gap-0.5 text-green-500 my-8">
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
                </div>
                <p className="mt-4 text-gray-700">
                {content}
                </p>
            </blockquote>
        )
    }

    export default Review