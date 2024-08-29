import React from 'react';
import Title from './Title';
import Cards from './Cards';
import { SiAntdesign, SiProgress } from 'react-icons/si';
import { FaGlobe, FaMobile } from 'react-icons/fa';

const Features = () => {
  const title = 'Business Strategy';
  const desc =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien at neque pulvinar bibendum.';
  return (
    <section
      id="feature"
      className="w-full py-20 border-b-[1px] border-b-black "
    >
      <div className=" flex flex-col gap-8">
        <Title title={'Features'} subtitle={'What I Do'} />
        <div className="grid grid-cols-3 gap-20">
          <Cards title={title} desc={desc} />
          <Cards title={title} desc={desc} icon={<SiProgress />} />
          <Cards title={title} desc={desc} icon={<FaMobile />} />
          <Cards title={title} desc={desc} icon={<SiAntdesign />} />
          <Cards title={title} desc={desc} icon={<FaGlobe />} />
          <Cards title={title} desc={desc} icon={<FaMobile />} />
        </div>
      </div>
    </section>
  );
};

export default Features;
