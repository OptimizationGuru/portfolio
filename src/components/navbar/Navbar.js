import React from 'react';
import { bannerImg, logo } from '../../assets/index';
import navLinkArray from '../../constants';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 sticky top-0 z-50 bg-bodyColor font-titleFont border-b-[1px] border-b-gray-100">
      <div className='flex justify-between items-center gap-4'>
        <img src={bannerImg} alt="logo" className='w-12 h-12 rounded-full mt-2' />
        <p className=' font-titleFont text-gray-400 text-2xl font-medium uppercase hover:text-designColor duration-300'>Shivam</p>
      </div>
      <ul className="flex list-none">
        {navLinkArray.map(({ id, title, link }) => (
          <li
            key={id}
            className="mx-4 pt-4 px-4 text-xl text-gray-400 hover:text-designColor duration-300 "
          >
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
