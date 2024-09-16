import React from 'react';
import Title from './Title';
import Cards from './Cards';
import { workDescription } from '../../constants';

const Features = () => {
  return (
    <section
      className="w-full py-8 border-b-[1px] border-b-black "
    >
      <div className=" flex flex-col gap-8 items-center justify-center ">
        <Title title={'Features'} subtitle={'What I Do'} />
        <div className="grid grid-col-1 px-6 my-2  md:grid md:grid-cols-2  md:gap-12 xl:grid-cols-3 xl:ml-8">
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
