import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Navigation = () => {
  return (
    <header className="bg-gray-100 sticky top-0 border-b w-full lg:fixed md:static md:text-sm md:border-none font-normal rounded-b-2xl shadow-md z-10">
      <div className="container items-center px-4 mx-auto md:flex md:px-8 justify-between">
        <div className="flex items-center py-3 md:py-5 md:block">
          <Link to={"/"}>
            <img src={logo} width={120} height={50} alt="madservice logo" />
          </Link>
        </div>
        <div className="pb-3 mt-8 md:block md:pb-0 md:mt-0 block text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-10"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
