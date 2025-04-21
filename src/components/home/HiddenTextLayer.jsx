import React, { useEffect, useRef, useState } from "react";
import { IoMdFlashlight } from "react-icons/io";
import { LuFlashlight, LuFlashlightOff } from "react-icons/lu";
import faceImg from "../../assets/face.png";

const HiddenTextLayer = ({ torch }) => {
  //   const [torch, setTorch] = useState("false");

  const divRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // console.log("moved");
      const { width, height } = e.target.getBoundingClientRect();
      const offsetX = e.offsetX;
      const offsetY = e.offsetY;
      // console.log(offsetX, offsetY);
      const left = `${(offsetX / width) * 100}%`;
      const top = `${(offsetY / height) * 100}%`;
      if (e.target === divRef.current) {
        spanRef.current.animate({ left }, { duration: 100, fill: "forwards" });
        spanRef.current.animate({ top }, { duration: 100, fill: "forwards" });
      }
    };

    if (divRef.current) {
      divRef.current.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (divRef.current) {
        divRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="absolute w-full h-screen z-[1] pointer-events-none">
      <div
        ref={divRef}
        className="relative w-full h-screen bg-black z-10 pointer-events-auto"
      >
        <div className="pointer-events-none">
          <span className="absolute right-36 top-60 z-20">
            <img src={faceImg} alt="faceimage" className="h-32 w-64" />
          </span>
        </div>
        <span
          ref={spanRef}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.8) 10%, rgba(0, 0, 0, 0) 70%)",
            display: torch ? "none" : "",
          }}
        ></span>
      </div>
    </div>
  );
};

export default HiddenTextLayer;
