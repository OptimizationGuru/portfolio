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
      className="w-full py-10 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center mb-9">
        <Title
          title={'View my Projects & drop your feedback'}
          subtitle={'My Projects'}
        />
      </div>
      <div className="grid grid-cols-1 px-4 gap-4 md:gap-6 md:mx-10 md:px-12 md:w-[85%] md:justify-center-center lg:grid-cols-3 lg:gap-6">
        <ProjectCard
          title={'NETFLIXGPT'}
          desc={projectNextStreamDBullets}
          img={projectOne}
          liveUrl={projectLinks[0].liveUrl}
          githubUrl={projectLinks[0].githubUrl}
        />
        <ProjectCard
          title={'NEXTSTREAM'}
          desc={projectMovieStoreBullets}
          img={projectTwo}
          liveUrl={projectLinks[1].liveUrl}
          githubUrl={projectLinks[1].githubUrl}
        />
        <ProjectCard
          title={'Cravings'}
          desc={projectPortfolioBullets}
          img={projectOne}
          liveUrl={projectLinks[2].liveUrl}
          githubUrl={projectLinks[2].githubUrl}
        />
        {/* <ProjectCard title={'FlipStory'} desc={'XXXXXX'} img={projectTwo} />
        <ProjectCard title={'Project 5'} desc={'XXXXXX'} img={projectOne} />
        <ProjectCard title={'Project 6'} desc={'XXXXXX'} img={projectTwo} /> */}
      </div>
    </section>
  );
};

export default Projects;
