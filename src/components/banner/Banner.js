import React from 'react';
import LeftBanner from './LeftBanner';
import RightBannner from './RightBannner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full px-4 md:h-[650px] lg:h-auto md:py-12 lg:py-40 border-b-[1px] border-b-blue-300 bg-gradient-to-b from-gray-800 to-black font-titleFont"
    >
      <div className="flex flex-col md:flex-row  md:mx-auto md:gap-10 lg:gap-12 justify-between items-center px-4  max-w-screen-2xl">
        <div className="w-full md:w-[60%] lg:w-2/3 mb-8 md:mb-0 rounded-lg shadow-lg">
          <LeftBanner />
        </div>
        <div className="w-full md:w-[40%] lg:w/1/3 rounded-lg shadow-lg md:-mt-[120px] lg:mt-0">
          <RightBannner />
        </div>
      </div>
    </section>
  );
};

export default Banner;
