import React, { useState } from 'react';
import { bannerImg } from '../../assets/index';
import navLinkArray from '../../constants';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50 flex justify-around items-center py-4 px-2 md:px-10 font-titleFont border-b-[1px] border-b-gray-100 bg-bodyColor">
      {/* Logo and Title */}
      <div className="flex items-center gap-2">
        <img
          src={bannerImg}
          alt="logo"
          className="w-12 h-12 rounded-full mt-2"
        />
        <p className="font-titleFont text-gray-400 text-2xl font-medium uppercase hover:text-designColor duration-300">
          Shivam
        </p>
      </div>

      {/* Navbar Links (visible on medium and larger screens) */}
      <div className="hidden md:flex flex-grow justify-center">
        <ul className="flex space-x-6">
          {navLinkArray.map(({ id, title, link }) => (
            <li
              key={id}
              className="text-lg text-gray-400 hover:text-designColor duration-300 cursor-pointer"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70} // Adjust this offset based on header height
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Menu (visible on mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-3xl text-gray-400 focus:outline-none"
        >
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Sidebar (visible on mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-bodyColor shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <img
              src={bannerImg}
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <p className="font-titleFont text-gray-400 text-xl font-medium uppercase">
              Shivam
            </p>
          </div>

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-2xl text-gray-400 focus:outline-none"
          >
            <FiX />
          </button>
        </div>

        <ul className="flex flex-col items-start p-4">
          {navLinkArray.map(({ id, title, link }) => (
            <li
              key={id}
              className="w-full py-4 px-4 text-lg text-gray-400 hover:text-designColor duration-300"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsSidebarOpen(false)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for Sidebar (visible when sidebar is open) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
