import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex justify-between items-center"
    >
      <div className="flex flex-col justify-center">
        <div className="py-12 font-titleFont">
          <p className="text-designColor text-sm tracking-[4px]">2007-2019</p>
          <h2 className="text-4xl font-bold">Education Quality</h2>
        </div>

        <div className="w-full border-black border-l-[6px] border-opacity-30 flex flex-col gap-4">
          <ResumeCard
            program={'Bachelor of Technology'}
            timeline={'2015-2019'}
            university={'Indian Institute of Technology Guwahati'}
            grade={'7.68 / 10'}
            desc={' CST'}
          />
          <ResumeCard
            program={'Bachelor of Technology'}
            timeline={'2015-2019'}
            university={'Indian Institute of Technology Guwahati'}
            grade={'7.68 / 10'}
            desc={' CST'}
          />
          <ResumeCard
            program={'Bachelor of Technology'}
            timeline={'2015-2019'}
            university={'Indian Institute of Technology Guwahati'}
            grade={'7.68 / 10'}
            desc={' CST'}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="py-12 font-titleFont">
          <p className="text-designColor text-sm tracking-[4px]">2007-2019</p>
          <h2 className="text-4xl font-bold">Education Quality</h2>
        </div>

        <div className="w-full  border-black border-l-[6px] border-opacity-30 flex flex-col gap-4">
          <ResumeCard
            program={'Bachelor of Technology'}
            timeline={'2015-2019'}
            university={'Indian Institute of Technology Guwahati'}
            grade={'7.68 / 10'}
            desc={' CST'}
          />
          <ResumeCard
            program={'Bachelor of Technology'}
            timeline={'2015-2019'}
            university={'Indian Institute of Technology Guwahati'}
            grade={'7.68 / 10'}
            desc={' CST'}
          />
          <ResumeCard
            program={'Bachelor of Technology'}
            timeline={'2015-2019'}
            university={'Indian Institute of Technology Guwahati'}
            grade={'7.68 / 10'}
            desc={' CST'}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
