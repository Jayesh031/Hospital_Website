import React from "react";
import Navbar from "./Navbar"; // Assuming Navbar is a separate component
import Video from "../assets/logo_video.mp4";

const HeroSection = () => {
  return (
    <div className="relative h-screen pt-[4rem]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Video} // Replace with your video URL
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Our Hospital</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Committed to providing the best healthcare services with state-of-the-art technology
          and highly skilled professionals.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-blue-600 rounded-lg text-white text-lg hover:bg-blue-700">
            Book an Appointment
          </button>
          <button className="px-6 py-3 bg-gray-700 rounded-lg text-white text-lg hover:bg-gray-800">
            Learn More
          </button>
        </div>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>
    </div>
  );
};

export default HeroSection;
