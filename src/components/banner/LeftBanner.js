import React from 'react';

import { introduction } from '../../constants';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaFacebookF, FaLinkedin, FaReact, FaTwitter } from 'react-icons/fa';
import { SiFigma, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

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
          <h4 className="text-lg font-normal">Welcome to my World!</h4>

          <h1 className="text-6xl font-bold">
            Hi, I'm
            <span className="text-6xl   text-designColor"> Shivam Tiwari</span>
          </h1>

          <h2 className="font-bold text-4xl">
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
            <h2 className="gap-4 my-4 text-xl">Find me in</h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
              <span className="bannerIcon">
                <FaLinkedin />
              </span>
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </div>
          </div>
          <div className="">
            <h2 className="gap-4 my-4 text-xl">Best skill on</h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="bannerIcon">
                <SiNextdotjs />
              </span>
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
              <span className="bannerIcon">
                <SiFigma />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2"></div>
      {/* <div>
        <img alt="my_pic" src={bannerImg} className=" mr-[150px] mt-[100px] " />
      </div> */}
    </section>
  );
};

export default LeftBanner;
