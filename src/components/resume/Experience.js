import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

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

        <div className="w-[95%] lg:w-[100%] border-black border-l-[6px] border-opacity-30 flex flex-col gap-4">
          <ProjectCard
            title={'Swift Battery Swap Service'}
            desc={
              "Enabled battery swaps in under 1 minute, boosted operational efficiency by 30%, higher customer satisfaction, and increased market adoption, strengthening the company's competitive edge and driving growth."
            }
          />
          <ProjectCard
            title={'Battery Tracking System'}
            desc={
              'Eliminated stockouts during peak hours on weekends/holidays by 80% through dynamic routing and location tracking, fostering customer trust and retention without incurring additional costs.'
            }
          />
          <ProjectCard
            title={'Cash Management System'}
            desc={
              'Implemented cash payments for e-rickshaw drivers without smartphones, expanding Yuma’s customer base and boosting revenue by including a large segment without smartphone access.'
            }
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center  px-4 lg:w-[45%]">
        <div className="py-12 font-titleFont">
          <p className="text-designColor text-sm tracking-[4px]">JAN 2022 - SEP 2024</p>
          <h2 className="text-4xl font-bold">Daily Hustle</h2>
        </div>

        <div className="w-[95%] lg:w-[100%] border-black border-l-[6px] border-opacity-30 flex flex-col gap-4">
          <ProjectCard
            title={'Smart Onboarding System'}
            desc={
              'Enhanced onboarding with role-based access makes user setup smooth, assigns roles and functions accurately, and keeps the system secure, benefiting HR and user management.'
            }
          />
          <ProjectCard
            title={'Leadership Qualities'}
            desc={
              'Mentored interns and new hires, facilitating smooth onboarding and understanding of the codebase, provided detailed explanations of existing features and best practices.'
            }
          />
          <ProjectCard
            title={'Code Reviews & QA'}
            desc={
              'Conducted thorough code reviews, ensuring high quality and adherence to best practices. Managed deployment and release processes, coordinating with the team to ensure smooth and timely rollouts of new features and updates.'
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
