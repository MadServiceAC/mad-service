import React from 'react';

const SvcCard = ({ imageSrc, title, services }) => {
  return (
    <div className="bg-white block shadow-lg lg:flex justify-between">
      <img src={imageSrc} alt={title} className="hidden lg:block h-auto object-cover" />
      <div className="py-8 w-auto lg:w-1/2 mx-8 items-center">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <ul className="space-y-4 p-4">
          {services.map((service, index) => (
            <li key={index} className="flex justify-between border-b-2 py-1">
              <span>{service.name}</span>
              <span>{service.price}</span>
              
            </li>
          ))}
        </ul>
        <div className='flex justify-end'>
        <button className="mt-6 bg-button hover:bg-yellow-500 text-gray-900 font-medium px-8 py-2 rounded-lg flex items-center shadow-lg">
          Pesan sekarang
          <span className="ml-2">&rarr;</span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default SvcCard;
