import React from 'react';

const ProjectCard = ({ title, desc, icon }) => {
  return (
    <div className="w-full flex group ">
      <div className="relative w-10 h-[6px] mt-16 bgOpacity">
        <span className="absolute w-5 h-5 bg-black bg-opacity-60 -top-2 -left-3 rounded-full  flex justify-center items-center">
          <span className="w-3 h-3 bg-bodyColor rounded-full inline-flex  m-1 group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 px-10 py-16 gap-4 shadow-shadowOne rounded-lg flex flex-col justify-center">
        <div>
          <div className="flex gap-2">
            <div className="mt-2 ml-2">{icon}</div>
            <h3 className="font-titleFont text-lg pb-4 md:text-3xl font-semibold">
              {title}
            </h3>
          </div>

          <div className="flex flex-col py-1">
            {desc.length > 0 &&
              desc.map((bullet, idx) => (
                <div
                  className="py-1 px-3 text-start justify-start items-start"
                  key={idx}
                >
                  {bullet}
                </div>
              ))}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
