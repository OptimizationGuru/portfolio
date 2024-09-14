import React from 'react';

const ResumeCard = ({ program, timeline, university, grade, desc }) => {
  return (
    <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  py-16 gap-2 shadow-shadowOne rounded-lg flex flex-col justify-center">
      <div className="w-full gap-1 flex flex-col">
        <h3 className="font-titleFont text-2xl lg:text-3xl font-semibold">
          {program}
        </h3>
        <p className="text-2xl">
          {university} <span>{`(${timeline})`}</span>{' '}
        </p>
      </div>
      <div className="my-3 ">
        <span className="text-xl mx-3">{desc}</span>
        <span className="shadow-shadowOne p-3 m-1 mx-3 text-designColor bg-black bg-opacity-40 rounded-lg">
          {grade}
        </span>
      </div>
    </div>
  );
};

export default ResumeCard;
