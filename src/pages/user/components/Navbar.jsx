import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

const Navbar = ({ links }) => {
  const [state, setState] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-gray-100 sticky top-0 border-b w-full lg:fixed md:static md:text-sm md:border-none font-normal rounded-b-2xl shadow-md z-10">
      <div className="container items-center px-4 mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to={'/'}>
            <img
              src={logo}
              width={120}
              height={50}
              alt="madservice logo"
            />
          </Link>
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {
                state ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )
              }
            </button>
          </div>
        </div>
        <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {
              links.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={index} className={`text-gray-700 hover:text-indigo-600 px-2 font-bold ${isActive ? 'lg:border-b-2 text-indigo-600 border-indigo-600' : ''}`}>
                    <Link to={link.path} className="block">
                      {link.text}
                    </Link>
                  </li>
                )
              })
            }
            <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
            <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
              <li>
                <a className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                  Profile
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
