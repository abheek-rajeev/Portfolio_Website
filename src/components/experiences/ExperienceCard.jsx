import React from "react";
import { useInView } from "react-intersection-observer";

const ExperienceCard = ({ exp }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = exp.tech;

  return (
    <div
      className="flex flex-col lg:flex-row justify-start lg:justify-center items-start py-8 px-4 sm:px-6 md:px-8 lg:py-14 lg:px-2 rounded-md overflow-hidden"
      ref={ref}
    >
      {/* Left side (Time Spent) */}
      <div
        className={`w-full lg:w-1/3 text-white text-left lg:text-center transition-transform duration-700 ease-out ${
          inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <p className="text-sm capitalize pt-1">{exp.timeSpent}</p>
      </div>

      {/* Right side (Details) */}
      <div
        className={`w-full lg:w-2/3 flex flex-col gap-3 mt-6 lg:mt-0 lg:pl-8 transition-transform duration-700 ease-out ${
          inView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <h2 className="text-xl lg:text-2xl font-bold capitalize font-geist text-sky-400">
          {exp.title} -{" "}
          <span className="text-base lg:text-xl font-medium">
            {exp.company}
          </span>
        </h2>
        <p className="text-sm">{exp.description}</p>
        <div className="flex flex-wrap gap-3 lg:gap-4">
          {skills.map((tech, index) => (
            <span
              key={index}
              className="bg-sky-500/30 rounded-full px-4 py-[6px] text-xs font-geist font-semibold min-w-20 text-center relative pl-6"
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
