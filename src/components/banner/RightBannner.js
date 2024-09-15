import React from 'react';
import { bannerImg } from '../../assets/index';

const RightBannner = () => {
  return (
    <div className="flex pb-4 mb-4  justify-center items-center relative mt-6 md:mt-0  p-3 rounded-xl">
      <img
        src={bannerImg}
        alt="banner-img"
        className="w-[220px] h-[220px] md:w-[260px]  md:h-[260px] lg:w-[400px] lg:h-[400px] z-10 rounded-xl shadow-lg"
      />
      <div className="absolute shadow-shadowOne w-[220px] h-[220px] md:w-[270px] md:h-[270px]  bg-[#212428] lg:w-[420px] lg:h-[420px] rounded-xl"></div>
    </div>
  );
};

export default RightBannner;
