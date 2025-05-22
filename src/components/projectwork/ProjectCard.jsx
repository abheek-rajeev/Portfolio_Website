import React from "react";
import reactLogo from "../../assets/React-icon.svg";

const ProjectCard = ({ proj }) => {
  return (
    <div
      className="flex flex-col lg:flex-row lg:flex-nowrap rounded-xl shadow-md p-6 sm:p-8 md:p-10 lg:p-10 gap-8 lg:gap-20 hover:bg-gray-900 justify-start lg:justify-center"
      onClick={() => {
        if (proj?.link) {
          window.open(proj.link, "_blank", "noopener noreferrer");
        }
      }}
    >
      <img
        src={proj.img || reactLogo}
        alt="react"
        className="h-36 w-36 mb-4 lg:mb-0 mr-auto ml-auto"
      />
      <div className="flex flex-col flex-wrap gap-3 w-full lg:w-3/5">
        <h2 className="text-xl lg:text-2xl font-bold capitalize font-geist">
          {proj.title}
        </h2>
        <ul className="list-disc ml-5 font-geist text-sm">
          {proj.desc.map((descItem, index) => (
            <li key={index} className="py-[3px]">
              {descItem}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap lg:flex-nowrap gap-3 lg:gap-4 mt-2">
          {proj.skills.map((items, index) => (
            <span
              key={index}
              className="capitalize bg-sky-500/30 rounded-full px-4 py-[6px] text-xs font-geist font-semibold min-w-20 text-center relative pl-6"
            >
              <span className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-500"></span>
              {items}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
