import React from "react";
import logo from "../../assets/images/logo.png";
import { Link, animateScroll as scroll} from "react-scroll";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuart',
    })
  }

  return (
    <nav className="bg-gray-100 flex justify-between w-full fixed items-center py-4 px-8 rounded-b-2xl shadow-md z-10" name="top">
      <a className="flex items-center">
        <img src={logo} className="h-10" alt="Mad service" />
      </a>
      <div className="flex space-x-6">
        <Link onClick={scrollToTop} smooth={true} className="text-black font-bold hover:text-blue-500">
          HOME
        </Link>
        <Link to="about" smooth={true} offset={-100} className="text-black font-bold hover:text-blue-500">
          ABOUT
        </Link>
        <Link to="service" smooth={true} offset={-75} className="text-black font-bold hover:text-blue-500">
          SERVICE
        </Link>
        <Link to="shop" smooth={true} offset={-70} className="text-black font-bold hover:text-blue-500">
          SHOP
        </Link>
        <Link to="contact" smooth={true} offset={-110} className="text-black font-bold hover:text-blue-500">
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
