import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-100 flex justify-between w-full fixed items-center py-4 px-8 rounded-b-2xl shadow-md z-10">
      <a className="flex items-center">
        <img src={logo} className='h-10' alt='Mad service'/>
      </a>
      <div className="flex space-x-6">
        <a href="/" className="text-black font-bold hover:text-blue-500">HOME</a>
        <a href="/about" className="text-black font-bold hover:text-blue-500">ABOUT</a>
        <Link to={'/service'} className="text-black font-bold hover:text-blue-500">SERVICE</Link>
        <a href="/shop" className="text-black font-bold hover:text-blue-500">SHOP</a>
        <a href="/contact" className="text-black font-bold hover:text-blue-500">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
