import React from 'react';
import Title from '../feature/Title';
import ProjectCard from './ProjectCard';
import { projectOne, projectTwo } from '../../assets';
import {
  projectLinks,
  projectMovieStoreBullets,
  projectNextStreamDBullets,
  projectPortfolioBullets,
} from '../../constants';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-10 border-b-[1px] border-b-black "
    >
      <div className="flex justify-center items-center text-center mb-9">
        <Title
          title={'View my Projects & drop your feedback'}
          subtitle={'My Projects'}
        />
      </div>
      <div className="grid grid-cols-1 items-center px-4 gap-5 md:gap-8 md:px-20 md:w-[85%] md:justify-center md:mx-4 lg:w-[90%] lg:grid-cols-2 lg:gap-12 lg:items-center lg:justify-center lg:text-center lg:px-4 xl:w-[70%] xl:ml-36">
        <div className="w-[100%] items-center justify-center text-left md:ml-10 ">
          <ProjectCard
            title={'NETFLIXGPT'}
            desc={projectNextStreamDBullets}
            img={projectOne}
            liveUrl={projectLinks[0].liveUrl}
            githubUrl={projectLinks[0].githubUrl}
          />
        </div>
        <div className="w-[100%] items-center justify-center text-left md:ml-10">
          <ProjectCard
            title={'NEXTSTREAM'}
            desc={projectMovieStoreBullets}
            img={projectTwo}
            liveUrl={projectLinks[1].liveUrl}
            githubUrl={projectLinks[1].githubUrl}
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
