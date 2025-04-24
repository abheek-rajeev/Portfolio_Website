import React, { useState } from "react";
import maximizeImg from "../assets/maximize.png";
import closeImg from "../assets/close.png";
import minimizeImg from "../assets/minus.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactModal = ({ handleClose }) => {
  const [isMax, setIsMax] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_hn81c0i",
        "template_h7mxhin",
        formData,
        "5HHMbfPUYOGkId0gV"
      )
      .then(
        () => {
          console.log("Email successfully sent!");
          toast.success("Message sent successfully!");
          setSubmitted(true);
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error("Something went wrong. Please try again later.");
        }
      );
    setSubmitted(true);
  };

  return (
    <div className="fixed h-screen w-screen flex justify-center items-center top-0 left-0 z-40 bg-gray-900/70">
      <div
        className={`relative bg-gray-900 w-[95%] xs:w-3/5 sm:w-3/5 md:w-2/3 lg:w-1/2 h-3/6 lg:h-4/6 rounded-lg flex flex-col`}
      >
        {/* Header */}
        <div className="contact-header flex items-center justify-end p-2 gap-4 bg-gray-800/40 rounded-t-lg">
          <button className="text-white hover:opacity-50" onClick={handleClose}>
            <img src={minimizeImg} alt="Minimize" className="w-4 h-4" />
          </button>
          <button
            className="text-white hover:opacity-50"
            onClick={() => setIsMax(!isMax)}
          >
            <img src={maximizeImg} alt="Maximize" className="w-4 h-4" />
          </button>
          <button className="text-white hover:opacity-50" onClick={handleClose}>
            <img src={closeImg} alt="Close" className="w-3 h-3" />
          </button>
        </div>

        {/* Content */}
        <div className="contact-content flex text-white p-4 sm:p-6 md:p-8 lg:p-10 flex-1 overflow-y-auto">
          {isMax && (
            <div className="relative content-left flex-1 pr-2 sm:pr-4 pt-2">
              <span className="block text-base sm:text-lg md:text-2xl font-geist font-semibold">
                Let's
              </span>
              <span className="block text-lg sm:text-2xl md:text-4xl font-geist uppercase font-bold tracking-wider">
                Chat
              </span>
              <span className="block absolute bottom-0 left-0 text-xs text-gray-600 font-geist">
                CONTACT INFO: +91 77365-74903
              </span>
            </div>
          )}

          <div className="content-right flex-1">
            {submitted ? (
              <div className="flex justify-center items-center h-full">
                <p className="text-sky-400 text-center text-base sm:text-lg">
                  Thanks! I’ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-2 pt-4 px-0 bg-transparent border-b border-gray-600 text-gray-300 text-sm uppercase outline-none transition-colors duration-200 focus:border-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-2 pt-4 px-0 bg-transparent border-b border-gray-600 text-gray-300 text-sm uppercase outline-none transition-colors duration-200 focus:border-white"
                  required
                />
                <textarea
                  name="message"
                  placeholder="YOUR MESSAGE"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={200}
                  className="w-full py-2 pt-4 px-0 bg-transparent border-b border-gray-600 text-gray-300 text-sm outline-none transition-colors duration-200 focus:border-white resize-none"
                  required
                ></textarea>
                <div className="text-right text-xs text-gray-500">
                  {formData.message.length}/200
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
