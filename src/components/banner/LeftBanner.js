import React from 'react';

import {
  github_Profile_link,
  introduction,
  leetcode_Profile_link,
  linkedIn_Profile_link,
} from '../../constants';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';
import {
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
} from 'react-icons/si';
import { TbBrandLeetcode } from 'react-icons/tb';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['Professional Coder', 'Frontend Developer', 'UI Designer'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full flex flex-col items-start justify-between py-5 text-left md:text-left">
      <div className="flex flex-col gap-5 w-full">
        <h4 className="text-lg  text-designColor font-semibold">
         !! Namaskaram 🙏 !!{' '}
        </h4>
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white leading-tight">
          Hi, I'm <span className="text-designColor">Shivam Tiwari</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking={true} cursorStyle="I" cursorColor="#ff014f" />
        </h2>
        <p className="text-lg font-semibold text-gray-300">{introduction}</p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-20 lg:gap-60 mt-10">
        <div>
          <h2 className="text-xl uppercase text-white">Find me on</h2>
          <div className="flex gap-4 mt-2">
            <a
              href={linkedIn_Profile_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href={github_Profile_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href={leetcode_Profile_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <TbBrandLeetcode />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xl uppercase text-white">Proficient in</h2>
          <div className="flex gap-4 mt-2">
            <span className="bannerIcon hover:text-yellow-500 transition-transform transform hover:scale-110">
              <SiJavascript />
            </span>
            <span className="bannerIcon hover:text-blue-500 transition-transform transform hover:scale-110">
              <FaReact />
            </span>
            <span className="bannerIcon hover:text-green-500 transition-transform transform hover:scale-110">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon hover:text-black transition-transform transform hover:scale-110">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon hover:text-blue-500 transition-transform transform hover:scale-110">
              <SiMysql />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
