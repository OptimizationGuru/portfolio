import React from 'react';
import { contantImg } from '../../assets';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactLeft = () => {
  return (
    <div className="w-[100%] flex flex-col item-center justify-center shadow-shadowOne py-8  gap-8 h-auto">
      <div className="px-4">
        <img
          src={contantImg}
          alt="contactImg"
          className="w-[88%] mx-5 rounded-xl"
        />
      </div>

      <div className="px-12 flex flex-col gap-4 w-ful">
        <h3 className="font-titleFont text-4xl font-bold">Shivam Tiwari</h3>

        <p className="font-bodyFont text-xl text-gray-400 text-wrap">
          Full-Stack Developer | Building Scalable, High-Performance Web Apps 🚀
        </p>
        <p className="font-bodyFont text-xl text-gray-400">
          I specialize in developing robust web solutions using modern
          technologies like React, Vue.js, TypeScript, NestJS, and more.
        </p>
      </div>

      <div className="px-12 flex flex-col justify-start gap-4">
        <p className="font-bodyFont text-lg text-gray-400">
          Phone :<span className="text-white"> +91-9954244840</span>
        </p>
        <p className="font-bodyFont text-xl text-gray-400">
          Email :<span className="text-white">dev.shivamtiwari@gmail.com</span>
        </p>
      </div>

      <div className="px-12 flex flex-col justify-start gap-4">
        <h3 className="font-bodyFont text-lg text-white uppercase">
          Find me on
        </h3>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaLinkedin />
          </span>
          <span className="bannerIcon">
            <FaGithub />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
