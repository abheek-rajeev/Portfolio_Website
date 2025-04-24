import React, { useState, useEffect } from "react";
import duckLogo from "../../assets/duckLogo.png";

const Navbar = ({ scrollToId }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const sections = ["Home", "Skills", "ExperiencesPage", "Projects"];

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className="absolute top-4 left-4 sm:left-8 md:left-16 lg:left-36 z-50 ">
        <div>
          <img src={duckLogo} alt="logo" className="h-10 w-10"></img>
        </div>
      </div>
      <div
        className={` bg-sky-500/30 backdrop-blur-sm h-10 sticky z-50 transition-transform duration-100  ease-in-out  max-w-fit px-8 m-auto rounded-full
        hidden
        lg:flex
        justify-center
        items-center
        gap-4
        ${
          visible
            ? "top-4 transform -translate-y-0"
            : "top-4 transform -translate-y-20"
        }`}
      >
        {sections.map((sec, index) => (
          <div
            key={index}
            className="relative inline-block cursor-pointer group"
            onClick={() => scrollToId(sec)}
          >
            <span
              className="text-gray-200 text-md font-sm transition-all duration-300"
              style={{ transition: "color 0.3s" }}
            >
              {sec === "ExperiencesPage" ? "Experience" : sec}
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
