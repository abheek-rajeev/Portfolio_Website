import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectDetails = [
    {
      title: "Book store API",
      skills: ["Node.js", "Express", "MongoDB", "Jest", "JWT"],
      desc: [
        "API CRUD operations for managing book information",
        "Basic authentication using JWT tokens",
        "Admin and user authorization using AUTH APIs and JWT verification",
        "Models for User and Books using MongoDB",
        "Unit tests for API endpoints using Jest",
      ],
      link: "https://github.com/abheek-rajeev/BookKeeping-API-with-jest-Test/",
    },
    {
      title: "Real Estate Marketplace Website",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js"],
      desc: [
        "Leveraged React for an engaging and responsive user interface",
        "Implemented secure sign-up, sign-in, and session handling leveraging Redux Toolkit and JWT",
        "Utilized MongoDB for scalable storage of real estate data",
        "Integrated Redux Toolkit and JWT for enhanced state management and secure user sessions",
      ],
      link: "https://github.com/abheek-rajeev/MERN-realEstate",
    },
    {
      title: "Smart Parking System",
      skills: ["React.js", "Firebase", "Arduino", "ESP32"],
      desc: [
        "Designed and implemented Arduino and hardware sections",
        "Worked on the front end to set up a clean user interface",
        "Leveraged Firebase for storage of parking data",
      ],
      link: "https://github.com/abheek-rajeev/car-parking-and-analysis-system",
    },
    {
      title: "Problem Solution Website",
      skills: ["React.js", "Firebase", "Arduino", "ESP32"],
      desc: [
        "Worked on the front end using React.js for server-side rendering",
        "Set up Two-Factor Authentication using Arduino and RFID scanner",
        "Created the back-end using Firebase as the database (Firestore and Real Time Database)",
      ],
      link: null, // Project link not provided
    },
  ];
  return (
    <div
      id="Projects"
      className="text-left px-4 sm:px-8 md:px-16 lg:px-36 py-16 text-white "
    >
      <h2 className="text-3xl font-bold">
        <span className="text-transparent bg-gradient-to-r from-sky-200 to-sky-600 bg-clip-text">
          Projects
        </span>
      </h2>
      <div className="flex flex-col gap-10 py-9 px-4 sm:px-6 md:px-10 lg:px-14">
        {projectDetails.map((proj, index) => (
          <ProjectCard key={index} proj={proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
