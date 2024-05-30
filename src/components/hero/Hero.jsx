import React from 'react'
import Heros from '../../assets/images/heros.png'

const Hero = () => {
  return (
    <div className="h-screen pt-10" style={{ backgroundImage: `url(${Heros})` }}>
          <div className="container mx-auto pt-40 text-white">
            <div className='gap-4'>
              <div>
              <h1 className="text-5xl font-semibold mb-5 text-gray-100">Air Conditioners</h1>
            <h1 className="text-5xl font-semibold mb-5">Maintenance and Diagnostics</h1>
            <p className="font-medium text-lg">Apakah AC Anda tidak lagi dingin?</p>
              <p className="font-medium text-lg">
            Apakah AC Anda mengeluarkan suara bising yang mengganggu?</p>
              <p className="mb-10 font-medium text-lg">
              Jika ya, maka Anda membutuhkan jasa servis AC terpercaya.</p>
            <div className="flex space-x-4">
                <button className="bg-yellow-500 text-black px-12 py-3 rounded-lg font-bold">Login</button>
                <button className="bg-white text-black px-12 py-3 rounded-lg font-bold">Sign Up</button>
            </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Hero
