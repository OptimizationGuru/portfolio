import React from 'react';
import { bannerImg } from '../../assets/index';

const RightBannner = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center relative -mt-12">
        <img
          src={bannerImg}
          alt="banner-img"
          className="w-[400px] h-[400px] z-10 rounded-[2rem] "
        />
        <div className="absolute -right-16 w-[400px] h-[550px] rounded-[1.5rem] shadow-shadowOne  bg-gradient-to-r from-[#1e2024] to-[#202327] flex justify-center items-center"></div>
      </div>
    </div>
  );
};

export default RightBannner;
