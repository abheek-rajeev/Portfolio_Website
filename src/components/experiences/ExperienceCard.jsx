import React from "react";
import { useInView } from "react-intersection-observer";

const ExperienceCard = ({ exp }) => {
  //   const techStack = ["React", "Node.js", "CSS"];
  const [ref, inView] = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });
  const skills = exp.tech;
  return (
    <div
      className="flex flex-row justify-center rounded-md items-start py-14 px-2 overflow-hidden "
      ref={ref}
    >
      <div
        className={`w-1/3 text-white  text-center transition-transform duration-700 ease-out ${
          inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <p className="text-sm capitalize pt-1">{exp.timeSpent}</p>
      </div>
      <div
        className={`w-2/3 pl-8 flex flex-col gap-3 transition-transform duration-700 ease-out ${
          inView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <h2 className="text-2xl font-bold capitalize font-geist text-sky-400">
          {exp.title} -{" "}
          <span className="text-xl font-medium">{exp.company}</span>
        </h2>
        <p className="text-sm">{exp.description}</p>
        <div className="flex flex-row gap-4">
          {skills.map((tech, index) => (
            <span
              className="bg-sky-500/30 rounded-full px-4 py-[6px] text-xs font-geist font-semibold min-w-20 text-center relative pl-6"
              key={index}
            >
              <span className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-500"></span>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
