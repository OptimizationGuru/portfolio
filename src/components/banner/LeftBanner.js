import React from 'react';

import {
  github_Profile_link,
  introduction,
  leetcode_Profile_link,
  linkedIn_Profile_link,
} from '../../constants';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaReact, FaTwitter } from 'react-icons/fa';
import {
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
} from 'react-icons/si';
import { TbBrandLeetcode } from 'react-icons/tb';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['Professional Coder', 'Full Stack Developer', 'UI Designer'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full flex items-center py-10 font-titleFont"
    >
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">Warm Welcome..! </h4>

          <h1 className="text-6xl font-bold text-white">
            Hi, I'm
            <span className="text-6xl   text-designColor"> Shivam Tiwari</span>
          </h1>

          <h2 className="font-bold text-4xl text-white">
            {' '}
            a <span>{text}. </span>
            <Cursor
              cursorBlinking={true}
              cursorStyle="I"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="font-semibold text-lg">{introduction}</p>
        </div>

        <div className="flex justify-between">
          <div className="">
            <h2 className="gap-4 my-4 text-xl uppercase">Find me on</h2>
            <div className="flex gap-4">
              <a
                href={linkedIn_Profile_link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700" // Tailwind class to change icon color on hover
              >
                <span className="bannerIcon">
                  <FaLinkedin />
                </span>
              </a>
              <a
                href={github_Profile_link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700" // Tailwind class to change icon color on hover
              >
                <span className="bannerIcon">
                  <FaGithub />
                </span>
              </a>
              <a
                href={leetcode_Profile_link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <span className="bannerIcon">
                  <TbBrandLeetcode />
                </span>
              </a>
            </div>
          </div>
          <div className="">
            <h2 className="gap-4 my-4 text-xl uppercase text-current items-center justify-center">
              Proficient in
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <SiJavascript />
              </span>
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
              <span className="bannerIcon">
                <SiNextdotjs />
              </span>
              <span className="bannerIcon">
                <SiMysql />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
};

export default LeftBanner;
