import React from 'react';
import Title from '../feature/Title';
import ProjectCard from './ProjectCard';
import { projectOne, projectTwo } from '../../assets';
import { nextStreamDesc } from '../../constants';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title={'View my Projects and drop your feedback'}
          subtitle={'My Projects'}
        />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <ProjectCard title={'NETFLIXGPT'} desc={'XXXXXX'} img={projectOne} />
        <ProjectCard
          title={'NEXTSTREAM'}
          desc={nextStreamDesc}
          img={projectTwo}
        />
        <ProjectCard title={'Cravings'} desc={'XXXXXX'} img={projectOne} />
        <ProjectCard title={'FlipStory'} desc={'XXXXXX'} img={projectTwo} />
        <ProjectCard title={'Project 5'} desc={'XXXXXX'} img={projectOne} />
        <ProjectCard title={'Project 6'} desc={'XXXXXX'} img={projectTwo} />
      </div>
    </section>
  );
};

export default Projects;
