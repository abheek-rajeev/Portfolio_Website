import React, { useState } from "react";
import HiddenTextLayer from "./HiddenTextLayer";
import VisibleTextLayer from "./VisibleTextLayer";
import duckLogo from "../../assets/duckLogo.png";

export const ThreeLayerd = ({ scrollToId }) => {
  const resumeUrl = process.env.REACT_APP_RESUME_URL;
  const [torch, setTorch] = useState("false");
  const handleTorchClick = () => {
    setTorch(!torch);
  };
  return (
    <div className="relative w-full h-screen  bg-black overflow-hidden">
      <VisibleTextLayer
        text="Abheek Rajeev"
        torch={torch}
        handleTorchClick={handleTorchClick}
      />
      <HiddenTextLayer torch={torch} />
    </div>
  );
};
