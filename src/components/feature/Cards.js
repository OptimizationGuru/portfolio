import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const Cards = ({ title, desc, icon }) => {
  return (
    <div className="w-full h-96 px-6 py-4 rounded-lg  flex items-center shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="h-full flex flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[5px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[5px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[5px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-titleFont font-bold text-2xl text-gray-300 ">
              {title}
            </h2>
            <p className="text-base">{desc}</p>
            <span className="text-5xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
