import React from "react";
import { MdLocationPin } from "react-icons/md";
import { LuFlashlight, LuFlashlightOff } from "react-icons/lu";
import wavingHand from "../../assets/wavingHand.gif";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

const VisibleTextLayer = ({ text, torch, handleTorchClick }) => {
  const links = [
    {
      href: process.env.REACT_APP_LINKEDIN_URL,
      icon: <FaLinkedin />,
    },
    { href: process.env.REACT_APP_GITHUB_URL, icon: <FaGithub /> },
    { href: process.env.REACT_APP_RESUME_URL, icon: <HiDocumentText /> },
  ];

  return (
    <>
      <div className="absolute w-full h-screen flex flex-col justify-center items-start gap-2 text-white z-20 pointer-events-none max-w-5xl overflow-hidden px-4 sm:px-8 md:px-16 lg:px-36">
        <p className="capitalize flex justify-start items-center gap-2 pointer-events-auto">
          <MdLocationPin />
          Kerala, India{" "}
        </p>
        <h2 className="text-lg md:text-3xl font-bold">
          Hi, I'm{" "}
          <span className="text-transparent bg-gradient-to-r from-sky-200 to-sky-600 bg-clip-text pointer-events-auto">
            ABHEEK RAJEEV
          </span>{" "}
          <span className=" inline-flex pointer-events-auto pl-1">
            <img src={wavingHand} alt="Hii" className="h-8 w-8"></img>
          </span>
        </h2>
        <h2 className="text-3xl md:text-6xl font-bold text-left">
          Building pixel-perfect{" "}
          <span className="text-transparent bg-gradient-to-r from-sky-300 to-sky-800 bg-clip-text">
            Interactive
          </span>{" "}
          Websites
        </h2>
        <h2 className="text-lg md:text-3xl font-bold pt-5">
          Full-stack Developer
        </h2>

        {/* Links  */}
        <div className="flex justify-center space-x-4 py-6 pointer-events-auto">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white text-3xl transform transition-transform duration-300 hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <button
        className="absolute right-5 sm:right-14 md:right-18 lg:right-36 bottom-20 text-black px-2 py-2 bg-yellow-300  rounded-full w-10 h-10 flex items-center justify-center z-40"
        onClick={() => {
          console.log("torch clicked");
          handleTorchClick();
        }}
      >
        {torch ? <LuFlashlight /> : <LuFlashlightOff />}
      </button>
    </>
  );
};

export default VisibleTextLayer;
