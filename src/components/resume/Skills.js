import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col lg:flex-row justify-between px-4 w-[95%] lg:w-full gap-8 lg:gap-20"
    >
      <div className="w-[100%] px-4 lg:w-1/2">
        <div className="py-8 lg:py-12 font-titleFont flex flex-col gap-2 items-center justify-center text-center">
          <p className="text-designColor text-sm tracking-[4px]">
            Frontend Development
          </p>
          <h2 className="text-2xl lg:text-4xl font-bold">
            Adaptive UI Engineering
          </h2>
        </div>

        <div className="my-4 lg:my-7 w-full">
          <p className="text-sm uppercase font-medium">JavaScript</p>
          <span className="w-full h-2 mt-2 bg-black bg-opacity-40 inline-flex rounded-lg ">
            <span className="w-[90%] h-full bg-gradient-to-r rounded-lg from-blue-700 via-pink-500 to-red-600 relative">
              <span className="absolute  -top-7 right-0">90%</span>
            </span>
          </span>
        </div>

        <div className="my-4 lg:my-7 w-full">
          <p className="text-sm uppercase font-medium">React JS</p>
          <span className="w-full h-2 mt-2 bg-black bg-opacity-40 inline-flex rounded-lg ">
            <span className="w-[85%] h-full bg-gradient-to-r rounded-lg from-blue-700 via-pink-500 to-red-600 relative">
              <span className="absolute  -top-7 right-0">85%</span>
            </span>
          </span>
        </div>

        <div className="my-4 lg:my-7 w-full">
          <p className="text-sm  font-medium">State Management/Redux</p>
          <span className="w-full h-2 mt-2 bg-black bg-opacity-40 inline-flex rounded-lg ">
            <span className="w-[90%] h-full bg-gradient-to-r rounded-lg from-blue-700 via-pink-500 to-red-600 relative">
              <span className="absolute  -top-7 right-0">90%</span>
            </span>
          </span>
        </div>

        <div className="my-4 lg:my-7 w-full">
          <p className="text-sm uppercase font-medium">HTML/CSS</p>
          <span className="w-full h-2 mt-2 bg-black bg-opacity-40 inline-flex rounded-lg ">
            <span className="w-[75%] h-full bg-gradient-to-r rounded-lg from-blue-700 via-pink-500 to-red-600 relative">
              <span className="absolute  -top-7 right-0">75%</span>
            </span>
          </span>
        </div>
        <div className="my-4 lg:my-7 w-full">
          <p className="text-sm  font-medium">TailwindCSS</p>
          <span className="w-full h-2 mt-2 bg-black bg-opacity-40 inline-flex rounded-lg ">
            <span className="w-[80%] h-full bg-gradient-to-r rounded-lg from-blue-700 via-pink-500 to-red-600 relative">
              <span className="absolute  -top-7 right-0">80%</span>
            </span>
          </span>
        </div>

        <div className="my-4 lg:my-7 w-full">
          <p className="text-sm  font-medium">VueJS</p>
          <span className="w-full h-2 mt-2 bg-black bg-opacity-40 inline-flex rounded-lg ">
            <span className="w-[80%] h-full bg-gradient-to-r rounded-lg from-blue-700 via-pink-500 to-red-600 relative">
              <span className="absolute  -top-7 right-0">80%</span>
            </span>
          </span>
        </div>
      </div>

      <div className="w-[100%] px-4 lg:w-1/2">
        <div className="py-8 lg:py-12 font-titleFont flex flex-col gap-2 item-center text-center">
          <p className="text-designColor text-sm tracking-[4px]">
            Backend Development
          </p>
          <h2 className="text-2xl lg:text-4xl font-bold">
            Resilient Backend Engineering
          </h2>
        </div>

        <div className="my-4 lg:my-7 w-full">
          <p className="text-sm uppercase font-medium">NestJS</p>
          <span className="w-full h-2 mt-2 bg-black bg-opacity-40 inline-flex rounded-lg ">
            <span className="w-[85%] h-full bg-gradient-to-r rounded-lg from-blue-700 via-pink-500 to-red-600 relative">
              <span className="absolute  -top-7 right-0">85%</span>
            </span>
          </span>
        </div>

        <div className="my-4 lg:my-7 w-full">
          <p className="text-sm uppercase font-medium">TypeScript</p>
          <span className="w-full h-2 mt-2 bg-black bg-opacity-40 inline-flex rounded-lg ">
            <span className="w-[85%] h-full bg-gradient-to-r rounded-lg from-blue-700 via-pink-500 to-red-600 relative">
              <span className="absolute  -top-7 right-0">85%</span>
            </span>
          </span>
        </div>

        <div className="my-4 lg:my-7 w-full">
          <p className="text-sm  font-medium">MySQL</p>
          <span className="w-full h-2 mt-2 bg-black bg-opacity-40 inline-flex rounded-lg ">
            <span className="w-[90%] h-full bg-gradient-to-r rounded-lg from-blue-700 via-pink-500 to-red-600 relative">
              <span className="absolute  -top-7 right-0">90%</span>
            </span>
          </span>
        </div>

        <div className="my-4 lg:my-7 w-full">
          <p className="text-sm uppercase font-medium">MongoDB</p>
          <span className="w-full h-2 mt-2 bg-black bg-opacity-40 inline-flex rounded-lg ">
            <span className="w-[85%] h-full bg-gradient-to-r rounded-lg from-blue-700 via-pink-500 to-red-600 relative">
              <span className="absolute  -top-7 right-0">85%</span>
            </span>
          </span>
        </div>
        <div className="my-4 lg:my-7 w-full">
          <p className="text-sm  font-medium">PostgreSQL</p>
          <span className="w-full h-2 mt-2 bg-black bg-opacity-40 inline-flex rounded-lg ">
            <span className="w-[60%] h-full bg-gradient-to-r rounded-lg from-blue-700 via-pink-500 to-red-600 relative">
              <span className="absolute  -top-7 right-0">60%</span>
            </span>
          </span>
        </div>

        <div className="my-4 lg:my-7 w-full">
          <p className="text-sm  font-medium">SQL</p>
          <span className="w-full h-2 mt-2 bg-black bg-opacity-40 inline-flex rounded-lg ">
            <span className="w-[85%] h-full bg-gradient-to-r rounded-lg from-blue-700 via-pink-500 to-red-600 relative">
              <span className="absolute  -top-7 right-0">85%</span>
            </span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
