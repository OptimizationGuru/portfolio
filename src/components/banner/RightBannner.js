import React from 'react';
import { bannerImg } from '../../assets';

const RightBannner = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center relative">
        <img
          src={bannerImg}
          alt="banner-img"
          className="w-[500px] h-[680px] z-10"
        />
        <div className="absolute bottom-0 w-[480px] h-[480px]  shadow-shadowOne  bg-gradient-to-r from-[#1e2024] to-[#202327] flex justify-center items-center"></div>
      </div>
    </div>
  );
};

export default RightBannner;
