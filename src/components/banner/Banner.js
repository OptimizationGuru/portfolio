import React from 'react';
import LeftBanner from './LeftBanner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full flex items-center py-20 border-b-[1px] border-b-white font-titleFont"
    >
      <div className="w-1/2">
        <LeftBanner />
      </div>
      <div className="w-1/2"></div>
    </section>
  );
};

export default Banner;
