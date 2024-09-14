import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const ProjectCard = ({ title, desc, img, liveUrl, githubUrl }) => {
  return (
    <div className="w-full h-[600px] md:h-[500px] lg:h-auto py-10 px-12 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      {/* <div className="flex flex-col gap-8 justify-center items-center"> */}
      <div className="w-full h-[80%] overflow-hidden rounded-lg flex flex-col gap-6">
        <img
          src={img}
          alt="src"
          className="w-full h-60 group-hover:scale-110 duration-300 object-cover"
        />
      </div>
      <div className="w-full mt-5 flex justify-between">
        <h3 className="text-designColor font-titleFont uppercase">{title}</h3>
        <div className="flex items-center justify-between gap-2">
          <span className="w-10 h-10 text-lg rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <FaGlobe />
            </a>
          </span>
          <span className="w-10 h-10 text-lg rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </span>
        </div>
      </div>
      <div>
        <p className="ext-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
          {desc}
        </p>
      </div>
    </div>
    // </div>
  );
};

export default ProjectCard;
