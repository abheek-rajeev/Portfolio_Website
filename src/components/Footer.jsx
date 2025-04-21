import React, { useState } from "react";
import telephone from "../assets/telephoneBooth.gif";
import Overlays from "./Overlays";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="relative py-5 pb-10">
        <h2>&copy; Abheek Rajeev</h2>
        <div className="absolute bottom-0 right-10 z-50">
          <img
            src={telephone}
            alt="telephone"
            className="h-28"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
      </div>
      {isOpen && <Overlays handleClose={handleClose} />}
    </>
  );
};

export default Footer;
