import React from 'react';
import LeftBanner from './LeftBanner';
import RightBannner from './RightBannner';

const Banner = () => {
  return (
    <section
      className="w-full px-4 md:h-[650px] lg:h-auto md:py-12 lg:py-36 lg:mb-8 border-b-[1px] font-titleFont"
    >
      <div className="flex flex-col md:flex-row  md:mx-auto md:gap-10 lg:gap-12 justify-between items-center px-4  md:max-w-[1400px]">
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
