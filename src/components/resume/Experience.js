import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { SiGooglemaps } from 'react-icons/si';
import { work_desc, work_desc2, work_desc3, work_desc4 } from '../../constants';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col lg:flex-row justify-between items-center"
    >
      <div className="flex flex-col justify-center items-center text-center px-4 lg:w-[45%]">
        <div className="py-12 font-titleFont">
          <p className="text-designColor text-sm tracking-[4px]">
            JAN 2022 - SEP 2024
          </p>
          <h2 className="text-4xl font-bold">Challenging Projects</h2>
        </div>

        <div className="w-[100%] lg:w-[100%] border-black border-l-[6px] border-opacity-30 flex flex-col gap-4">
          <ProjectCard title={'⏰ 60 Seconds Swap'} desc={work_desc} />
          <ProjectCard
            title={'Yuma Clusters Feature'}
            desc={work_desc2}
            icon={<SiGooglemaps size={30} />}
          />
          {/* <ProjectCard title={'Cash Management System'} desc={work_desc} /> */}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center  px-4 lg:w-[45%]">
        <div className="py-12 font-titleFont">
          <p className="text-designColor text-sm tracking-[4px]">
            JAN 2022 - SEP 2024
          </p>
          <h2 className="text-4xl font-bold">Daily Hustle</h2>
        </div>

        <div className="w-[95%] lg:w-[100%] border-black border-l-[6px] border-opacity-30 flex flex-col gap-4">
          {/* <ProjectCard title={'Smart Onboarding System'} desc={work_desc} /> */}
          <ProjectCard title={'Optimum webapp'} desc={work_desc3} />
          <ProjectCard title={'Leadership'} desc={work_desc4} />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
