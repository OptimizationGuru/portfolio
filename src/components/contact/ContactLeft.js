import React from 'react';
import { contantImg } from '../../assets';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  github_Profile_link,
  leetcode_Profile_link,
  linkedIn_Profile_link,
} from '../../constants';
import { TbBrandLeetcode } from 'react-icons/tb';

const ContactLeft = () => {
  return (
    <div className="w-[100%] flex flex-col item-center justify-center shadow-shadowOne py-8  gap-8 h-auto">
      <div className="w-full px-4 mx-1 md:mx-3">
        <img
          src={contantImg}
          alt="contactImg"
          className="w-[88%] mx-2 md:mx-5 rounded-xl"
        />
      </div>

      <div className="px-4 md:px-12 flex flex-col gap-4 w-full ml-2">
        <h3 className="font-titleFont text-3xl md:text-4xl font-bold">
          Shivam Tiwari
        </h3>

        <p className="font-bodyFont text-xl text-gray-400 text-wrap">
          Full-Stack Developer | Building Scalable Performant Web App 🚀
        </p>
        <p className="font-bodyFont text-xl text-gray-400">
          I specialize in developing robust web solutions using modern
          technologies like React, Vue.js, TypeScript, NestJS, and more.
        </p>
      </div>

      <div className="px-4 md:px-12 flex flex-col justify-start gap-4 ml-2">
        <p className="font-bodyFont text-lg text-gray-400">
          Phone :<span className="text-white"> +91-9954244840</span>
        </p>
        <p className="font-bodyFont text-xl text-gray-400">
          Email :
          <span className="text-white text-wrap">
            {' '}
            dev.shivamtiwari@gmail.com
          </span>
        </p>
      </div>

      <div className="px-4  md:px-12 flex flex-col justify-start gap-4 ml-2">
        <h3 className="font-bodyFont text-lg text-white uppercase">
          Find me on
        </h3>
        <div className="flex gap-4">
          <a
            href={linkedIn_Profile_link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <span className="bannerIcon">
              <FaLinkedin />
            </span>
          </a>
          <a
            href={github_Profile_link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
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
    </div>
  );
};

export default ContactLeft;
