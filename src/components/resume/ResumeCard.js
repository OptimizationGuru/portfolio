import React from 'react';

const ResumeCard = ({ program, timeline, university, grade, desc }) => {
  return (
    <div className="w-full flex group">
      <div className="relative w-10 h-[6px] mt-16 bgOpacity">
        <span className="absolute w-5 h-5 bg-black bg-opacity-60 -top-2 -left-3 rounded-full  flex justify-center items-center">
          <span className="w-3 h-3 bg-bodyColor rounded-full inline-flex  m-1 group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 px-10 py-16 gap-4 shadow-shadowOne rounded-lg flex flex-col justify-center">
        <div className="flex justify-between">
          <div>
            <h3 className="font-titleFont text-3xl font-semibold">{program}</h3>
            <p className="text-lg">{university}</p>
            <p className="text-lg py-4">
              {desc} {timeline.length ? `(${timeline})` : ''}
            </p>
          </div>
          <div>
            <p className="shadow-shadowOne p-3 m-1 text-designColor bg-black bg-opacity-40 rounded-lg">
              {grade}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
