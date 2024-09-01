import React, { useState } from 'react';
import Title from '../feature/Title';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Achievement from './Achievement';

const Resume = () => {
  const [showComponent, setShowComponent] = useState(1);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title={'2+ Years of Experience'} subtitle={'Resume'} />
      </div>
      <div>
        <ul className=" w-full grid grid-cols-4 my-4">
          <li
            onClick={() => setShowComponent(1)}
            className={
              showComponent === 1
                ? `border-designColor border-[1px] rounded-lg custom_li`
                : `border-none custom_li`
            }
          >
            Experience
          </li>
          <li
            onClick={() => setShowComponent(2)}
            className={
              showComponent === 2
                ? `border-designColor border-[1px] rounded-lg  custom_li`
                : `border-none custom_li`
            }
          >
            Skills
          </li>
          <li
            onClick={() => setShowComponent(3)}
            className={
              showComponent === 3
                ? `border-designColor border-[1px] rounded-lg custom_li`
                : `border-none custom_li`
            }
          >
            Education
          </li>
          <li
            onClick={() => setShowComponent(4)}
            className={
              showComponent === 4
                ? `border-designColor border-[1px] rounded-lg  custom_li`
                : `border-none custom_li`
            }
          >
            Achievements
          </li>
        </ul>
      </div>
      {showComponent === 1 ? (
        <Experience />
      ) : showComponent === 2 ? (
        <Skills />
      ) : showComponent === 3 ? (
        <Education />
      ) : (
        <Achievement />
      )}
    </section>
  );
};

export default Resume;
