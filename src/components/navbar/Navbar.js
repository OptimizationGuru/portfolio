import React from 'react';
import { logo } from '../../assets/index';
import navLinkArray from '../../constants';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 font-titleFont border-b-[1px] border-b-gray-100">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex list-none">
        {navLinkArray.map(({ id, title, link }) => (
          <li
            key={id}
            className="mx-4 pt-4 px-4 text-xl hover:text-designColor duration-300"
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
