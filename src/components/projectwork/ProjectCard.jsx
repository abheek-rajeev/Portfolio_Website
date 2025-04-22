import React from "react";
import reactLogo from "../../assets/React-icon.svg";

const ProjectCard = ({ proj }) => {
  const tech = ["react", "node"];
  return (
    <div
      className=" flex flex-row flex-nowrap rounded-xl shadow-md p-10 gap-20 hover:bg-gray-900"
      onClick={() => {
        if (proj?.link) {
          window.open(proj.link, "_blank", "noopener noreferrer");
        }
      }}
    >
      <img src={proj.img || reactLogo} alt="react" className="max-h-20" />
      <div className="flex flex-col flex-wrap gap-3">
        <h2 className="text-2xl font-bold capitalize font-geist">
          {proj.title}
        </h2>
        <ul className="font-geist text-sm">
          {proj.desc.map((descItem, index) => (
            <li key={index} className="py-[3px]">
              {descItem}
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-4">
          {proj.skills.map((items, index) => (
            <span
              className="capitalize bg-sky-500/30 rounded-full px-4 py-[6px] text-xs font-geist font-semibold min-w-20 text-center relative pl-6"
              key={index}
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
