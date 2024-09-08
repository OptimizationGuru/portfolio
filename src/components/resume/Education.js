import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex justify-between items-center w-full"
    >
      <div className="flex flex-col justify-center items-center text-center w-full">
        <div className="py-12 font-titleFont">
          <p className="text-designColor text-sm tracking-[4px]">2007-2019</p>
          <h2 className="text-4xl font-bold">Educational Qualifications</h2>
        </div>

        <div className=" w-full flex justify-between gap-8">
          <div className="w-full border-black border-l-[6px] border-opacity-30 flex gap-24 ">
            <ResumeCard
              program={'Bachelor of Technology'}
              timeline={'2015-2019'}
              university={'Indian Institute of Technology Guwahati'}
              grade={'7.68 / 10'}
              desc={' CST'}
            />
          </div>
          <div className="w-full border-black border-l-[6px] border-opacity-30 flex  gap-4 ">
            <ResumeCard
              program={'Senior Secondary'}
              timeline={'2013-2014'}
              university={'Shiv Jyoti Sr. Sc. School, Kota'}
              grade={'82.6 / 100'}
              desc={' PCM'}
            />
          </div>
        </div>
        <div className="w-1/2 border-black border-l-[6px] border-opacity-30 flex gap-24 mt-8 ">
          <ResumeCard
            program={'Higher Secondary'}
            timeline={'2011-2012'}
            university={'Jagran Public School Kannauj'}
            grade={'10 / 10'}
            desc={'MSEHC'}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
