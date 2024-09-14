import React from 'react';

const Title = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col item-center justify-center text-center md:items-start md:justify-start md:text-start gap-4 font-titleFont mb-7 lg:mb-14">
      <h3 className="text-sm uppercase font-light text-designColor">{title}</h3>
      <h1 className="text-3xl md:text-5xl text-gray-300 font-bold tracking-wide">
        {subtitle}
      </h1>
    </div>
  );
};

export default Title;
