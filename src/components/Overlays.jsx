import React from "react";
import { createPortal } from "react-dom";
import ContactModal from "./ContactModal";

const Overlays = ({ handleClose }) => {
  const mountElement = document.getElementById("overlays");
  return createPortal(<ContactModal handleClose={handleClose} />, mountElement);
};

export default Overlays;
