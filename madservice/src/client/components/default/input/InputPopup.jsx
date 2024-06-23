import React, { useState } from 'react';
import data from '../../pages/user/minidata'

const InputTextWithPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [review, setReview] = useState({ name: "", rating: "", content: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.reviews.push({ ...review, time: "just now", name: "ne wu ser" });
    setIsOpen(false);
    setReview({ rating: "", content: "" });
  };

  return (
    <div className='w-full'>
      <div
        className="flex items-center p-4 cursor-pointer w-full"
        onClick={() => setIsOpen(true)}
      >
        <div className='bg-gray-700 p-2 rounded-full items-center flex mr-1'>
        <svg className="w-8 h-8 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
        </div>
        <input
          type="text"
          placeholder="Tambahkan Ulasan"
          className="flex-grow border-none focus:outline-none text-gray-600 p-4 rounded-lg shadow-md"
          readOnly
        />
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-lg w-full">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Score</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mb-4">
                {/* Rating stars */}
                <div className="flex">
                  <input
                    type="number"
                    name="rating"
                    value={review.rating}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                    placeholder="Rate out of 5"
                    min="1"
                    max="5"
                    step="0.1"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">Review</label>
                <textarea
                  id="content"
                  name="content"
                  value={review.content}
                  onChange={handleInputChange}
                  rows="4"
                  className="mt-1 block w-full border p-2 rounded"
                  placeholder="Tambahkan Ulasan"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputTextWithPopup;
