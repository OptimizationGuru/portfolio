import React from 'react';
import Title from './Title';
import Cards from './Cards';
import { workDescription } from '../../constants';

const Features = () => {
  return (
    <section
      id="feature"
      className="w-full py-20 border-b-[1px] border-b-black "
    >
      <div className=" flex flex-col gap-8">
        <Title title={'Features'} subtitle={'What I Do'} />
        <div className="grid grid-cols-3 gap-20">
          {}
          {workDescription.map((work) => {
            return (
              <Cards
                key={work.id}
                title={work.title}
                desc={work.description}
                icon={work.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
