import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex justify-between items-center"
    >
      <div className="flex flex-col justify-center w-[45%]">
        <div className="py-12 font-titleFont">
          <p className="text-designColor text-sm tracking-[4px]">2022-2024</p>
          <h2 className="text-4xl font-bold">Challenging Projects</h2>
        </div>

        <div className="w-full border-black border-l-[6px] border-opacity-30 flex flex-col gap-4">
          <ResumeCard
            program={'Swift Battery Swap Service'}
            timeline={''}
            university={''}
            grade={''}
            desc={
              "Enabled battery swaps in under 1 minute, boosted operational efficiency by 30%, higher customer satisfaction, and increased market adoption, strengthening the company's competitive edge and driving growth."
            }
          />
          <ResumeCard
            program={'Battery Tracking System'}
            timeline={''}
            university={''}
            grade={''}
            desc={
              'Eliminated stockouts during peak hours on weekends/holidays by 80% through dynamic routing and location tracking, fostering customer trust and retention without incurring additional costs.'
            }
          />
          <ResumeCard
            program={'Cash Management System'}
            timeline={''}
            university={''}
            grade={''}
            desc={
              'Implemented cash payments for e-rickshaw drivers without smartphones, expanding Yuma’s customer base and boosting revenue by including a large segment without smartphone access.'
            }
          />
        </div>
      </div>

      <div className="flex flex-col justify-center w-[45%]">
        <div className="py-12 font-titleFont">
          <p className="text-designColor text-sm tracking-[4px]">2022-2024</p>
          <h2 className="text-4xl font-bold">Day to Day Work</h2>
        </div>

        <div className="w-full border-black border-l-[6px] border-opacity-30 flex flex-col gap-4">
          <ResumeCard
            program={'Smart Onboarding System'}
            timeline={''}
            university={''}
            grade={''}
            desc={
              'Enhanced onboarding with role-based access makes user setup smooth, assigns roles and functions accurately, and keeps the system secure, benefiting HR and user management.'
            }
          />
          <ResumeCard
            program={'Leadership Qualities'}
            timeline={''}
            university={''}
            grade={''}
            desc={
              'Mentored interns and new hires, facilitating smooth onboarding and understanding of the codebase, provided detailed explanations of existing features and best practices.'
            }
          />
          <ResumeCard
            program={'Code Reviews & QA'}
            timeline={''}
            university={''}
            grade={''}
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
