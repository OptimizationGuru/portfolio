import React from 'react';
import LeftBanner from './LeftBanner';
import RightBannner from './RightBannner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full flex items-center py-10 border-b-[1.5px] border-black font-titleFont"
    >
      <div className="w-3/5 flex items-center relative justify-center">
        <LeftBanner />
      </div>
      <div className="w-2/5 flex items-center relative justify-center">
        <RightBannner />
      </div>
    </section>
  );
};

export default Banner;
