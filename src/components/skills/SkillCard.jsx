import React from "react";
const SkillCard = ({ logo, title, desc }) => {
  return (
    <div className="flex flex-row items-center max-w-52 min-w-52 gap-3 p-2 rounded-lg bg-gray-800 border border-transparent lg:hover:border-white lg:hover:border-[1px] lg:hover:bg-sky-950 transition-all">
      <img src={logo} alt="typescript" className="h-8 w-8  rounded-md p-1" />
      <div className="flex flex-col">
        <h3 className="text-sm capitalize">{title}</h3>
        <p className="text-xs capitalize">{desc}</p>
      </div>
    </div>
  );
};

export default SkillCard;
