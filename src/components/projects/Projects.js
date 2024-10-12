import React from 'react';
import Title from '../feature/Title';
import ProjectCard from './ProjectCard';
import { FirstCreation, projectOne, projectTwo } from '../../assets';
import {
  createMateBullets,
  projectLinks,
  projectPortfolioBullets,
  projectTradeOptions,
} from '../../constants';

const Projects = () => {
  return (
    <section className="w-full py-10 border-b-[1px] border-b-black ">
      <div className="flex justify-center items-center text-center mb-9">
        <Title
          title={'Explore & drop your feedback'}
          subtitle={'My Projects'}
        />
      </div>
      <div className="grid grid-cols-1 items-center px-4 gap-5 md:gap-8 md:px-20 md:w-[98%] md:justify-center md:-ml-4 lg:w-[90%] lg:grid-cols-2 lg:gap-16 lg:items-center lg:justify-center lg:text-center lg:px-4 xl:grid-cols-3 xl:w-[90%] xl:ml-6">
        <div className="w-[100%] items-center justify-center text-left md:ml-10">
          <ProjectCard
            title={'Options Insights'}
            desc={projectTradeOptions}
            img={projectTwo}
            liveUrl={projectLinks[1].liveUrl}
            githubUrl={projectLinks[1].githubUrl}
          />
        </div>
        <div className="w-[100%] items-center justify-center text-left md:ml-10 ">
          <ProjectCard
            title={'CREATEMATE'}
            desc={createMateBullets}
            img={FirstCreation}
            liveUrl={projectLinks[0].liveUrl}
            githubUrl={projectLinks[0].githubUrl}
          />
        </div>

        <div className="w-[100%] items-center justify-center text-left md:ml-10">
          <ProjectCard
            title={'Cravings'}
            desc={projectPortfolioBullets}
            img={projectOne}
            liveUrl={projectLinks[2].liveUrl}
            githubUrl={projectLinks[2].githubUrl}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
