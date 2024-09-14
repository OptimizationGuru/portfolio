import React from 'react';
import { bannerImg } from '../../assets/index';

const RightBannner = () => {
  return (
    <div className="flex  justify-center items-center relative mt-6 md:mt-0  p-3 rounded-xl">
      <img
        src={bannerImg}
        alt="banner-img"
        className="w-[220px] h-[220px] md:w-[290px] md:h-[290px] lg:w-[400px] lg:h-[400px] z-10 rounded-xl shadow-lg"
      />
    </div>
  );
};

export default RightBannner;
