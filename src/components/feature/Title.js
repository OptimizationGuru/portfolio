import React from 'react';

const Title = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-light text-designColor">{title}</h3>
      <h1 className="text-5xl text-gray-300 font-bold tracking-wide">
        {subtitle}
      </h1>
    </div>
  );
};

export default Title;
