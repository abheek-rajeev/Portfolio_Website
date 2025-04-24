import React from "react";
import SkillCard from "./SkillCard";

import typescriptLogo from "../../assets/Typescript_logo_2020.svg";
import reactLogo from "../../assets/React-icon.svg";
import nextjsLogo from "../../assets/icons8-next.js.svg";
import tailwindLogo from "../../assets/Tailwind_CSS_Logo.svg";
import mongodbLogo from "../../assets/mongodb-svgrepo-com.svg";
import pythonLogo from "../../assets/python-svgrepo-com.svg";
import gitLogo from "../../assets/Git-Icon-White.svg";
import expressLogo from "../../assets/icons8-express-js (1).svg";

const skills = [
  { logo: typescriptLogo, title: "TypeScript", desc: "Type-safe JS" },
  { logo: reactLogo, title: "React", desc: "JavaScript Library" },
  { logo: nextjsLogo, title: "Next.js", desc: "React Framework" },
  { logo: tailwindLogo, title: "Tailwind CSS", desc: "CSS Framework" },
  { logo: mongodbLogo, title: "MongoDB", desc: "NoSQL Database" },
  { logo: pythonLogo, title: "Python", desc: "Versatile Language" },
  { logo: gitLogo, title: "Git", desc: "Version Control" },
  { logo: expressLogo, title: "ExpressJs", desc: "Node.js Framework" },
];

const Skills = () => {
  return (
    <div
      id="Skills"
      className="text-left px-6 sm:px-10 md:px-20 lg:px-36 py-16 md:py-24 lg:py-32 pb-32 md:pb-40 lg:pb-48"
    >
      <h2 className="text-white text-2xl sm:text-3xl font-bold">
        Current{" "}
        <span className="text-transparent bg-gradient-to-r from-sky-200 to-sky-600 bg-clip-text">
          Technologies
        </span>
      </h2>
      <p className="text-xs sm:text-md md:text-xs py-3">
        I'm proficient in a range of modern technologies that empower me to
        build highly functional solutions. These are some of my main
        technologies.
      </p>
      <div className="flex flex-wrap gap-5 py-10 justify-center">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            logo={skill.logo}
            title={skill.title}
            desc={skill.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
