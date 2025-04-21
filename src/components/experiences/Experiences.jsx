import react from "react";
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  const experienceInfo = [
    {
      timeSpent: "july 2024 - Current",
      title: "Junior software developer",
      company: "Epam Systems Inc.",
      description:
        "Completed training in ReactJS, Node.js, Express.js, and Next.js, building scalable web applications. Developed reusable React components to enhance code efficiency and scalability, and applied software design principles to create maintainable, responsive apps. Integrated dynamic UIs with real-time backend updates, implemented secure token-based authentication, and ensured robust functionality through comprehensive unit testing with Jest and React Testing Library.",
      tech: ["ReactJs", "NodeJS", "NextJs", "Tailwind", "Typescript"],
    },
    {
      timeSpent: "June 2023 - July 2023",
      title: "Frontend Developer Intern",
      company: "Dinesh IT systems",
      description:
        "Designed and developed a server monitoring system for Dinesh IT Systems using React for the frontend. Implemented real-time server metrics tracking with data stored and retrieved efficiently via Firebase. Set up proactive alert mechanisms for instant notifications on threshold breaches and contributed to system stability and performance through regular updates and maintenance.",
      tech: ["ReactJS", "NodeJS", "MongoDB"],
    },
  ];
  return (
    <div id="ExperiencesPage" className="text-left px-36 py-16 text-white">
      <h2 className="text-3xl font-bold">
        <span className="text-transparent bg-gradient-to-r from-sky-200 to-sky-600 bg-clip-text">
          Experience
        </span>
      </h2>
      <div className="flex flex-col p-10">
        {experienceInfo.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
