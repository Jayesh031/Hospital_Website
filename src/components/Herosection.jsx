// import React from "react";
// import Image from "../assets/main.jpg";

// const HeroSection = () => {
//   return (
//     <section className="bg-gray-200">
//       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 py-16 space-y-8 md:space-y-0 md:space-x-12">
//         {/* Text Content */}
//         <div className="text-center md:text-left max-w-lg">
//           <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
//             Comprehensive Care, <br /> Trusted Professionals
//           </h1>
//           <p className="text-gray-700 text-lg mt-4">
//             Providing advanced medical services with care and compassion for all your healthcare needs. Your health is our priority.
//           </p>
//           <div className="mt-6 flex justify-center md:justify-start space-x-4">
//             <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
//               Book an Appointment
//             </button>
//             <button className="px-6 py-3 bg-gray-200 text-blue-600 rounded-lg shadow-lg hover:bg-gray-300">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Image Content */}
//         <div className="flex justify-center md:justify-end">
//           <img
//             src={Image}
//             alt="Hospital Hero"
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// import React from "react";
// import video from "../assets/logo_video.mp4";

// const HeroSection = () => {
//   return (
//     <section className="bg-gray-100">
//       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 py-16 space-y-8 md:space-y-0 md:space-x-12">
//         {/* Text Content */}
//         <div className="text-center md:text-left max-w-lg">
//           <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
//             Comprehensive Care, <br /> Trusted Professionals
//           </h1>
//           <p className="text-gray-700 text-lg mt-4">
//             Providing advanced medical services with care and compassion for all your healthcare needs. Your health is our priority.
//           </p>
//           <div className="mt-6 flex justify-center md:justify-start space-x-4">
//             <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
//               Book an Appointment
//             </button>
//             <button className="px-6 py-3 bg-gray-200 text-blue-600 rounded-lg shadow-lg hover:bg-gray-300">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Video Content */}
//         <div className="flex justify-center md:justify-end">
//           <video
//             className="rounded-lg shadow-lg w-full md:w-[400px]"
//             autoPlay
//             loop
//             muted
//             playsInline
//           >
//             <source
//               src={video} // hospital-related video
//               type="video/mp4"
//             />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React from "react";
import video from "../assets/logo_video.mp4";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import Future from "../assets/future.jpg";
import Choose from "../assets/Choose.jpg";
import Main from "../assets/main.jpg";
import Image1 from "../assets/image1.svg";
import Image2 from "../assets/image2.svg";
import Image3 from "../assets/image3.svg";
import Image4 from "../assets/image4.svg";
const HeroSection = () => {
  return (
    <>
      <section className="bg-white  mt-[5rem]">
        {/* <Navbar/> */}
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 py-10 space-y-8 md:space-y-0 md:space-x-12">
          {/* Video Content (Right for Medium Screens, Top for Small Screens) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <video
              className="rounded-xl shadow-2xl w-[300px] sm:w-[350px] md:w-[530px]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src={video} // Replace with your hospital video URL
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Content (Left for Medium Screens, Below for Small Screens)#019fe3 */}
          {/* text-purple-500 */}
          <div className="text-center md:text-left w-full md:w-1/2 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold bg-[#0288D1] bg-clip-text text-transparent leading-tight">
              Comprehensive Care, <br /> Trusted Professionals
            </h1>
            <p className="text-gray-700 text-lg mt-4">
              Providing advanced medical services with care and compassion for all your healthcare needs. Your health is our priority.
            </p>
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <NavLink to='/appointment' className="px-6 py-3 bg-[#0288D1] text-[#FFFFFF] rounded-lg shadow-lg hover:[#0277BD]">
                Book an Appointment
              </NavLink>
              <NavLink to='/about' className="px-6 py-3 bg-gray-200 text-[#0288D1] rounded-lg shadow-lg hover:bg-gray-300">
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 text-[#0288D1] py-16 px-10">
        <div className="container mx-auto text-center">
          {/* Title */}
          <h2 className="text-[2rem] font-bold mb-8">Our Consulting Specialists</h2>

          {/* Specialists Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Box 1 */}
            <div className="bg-white text-gray-700 border-2 border-black rounded-3xl shadow-lg p-6 hover:scale-110 ease-in-out">
              <img
                src={Image2}
                alt="Specialist 1"
                className="w-24 h-24 mx-auto rounded mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Maternity Surgery & General Laparoscopy</h3>
              <p className="text-sm">
              Expert surgical care for safe maternity procedures and minimally invasive laparoscopic treatments.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white text-gray-700 border-2 border-black rounded-3xl shadow-lg p-6 hover:scale-110 ease-in-out">
              <img
                src={Image3}
                alt="Specialist 2"
                className="w-24 h-24 mx-auto rounded mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Sonography Center</h3>
              <p className="text-sm">
                Advanced ultrasound imaging for accurate diagnosis and monitoring of various medical conditions.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white text-gray-700 border-2 border-black rounded-3xl shadow-lg p-6 hover:scale-110 ease-in-out">
              <img
                src={Image4}
                alt="Specialist 3"
                className="w-24 h-24 mx-auto rounded mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Family Planning Solutions</h3>
              <p className="text-sm">
                Comprehensive counseling and modern contraceptive methods tailored to family health needs.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-white text-gray-700 border-2 border-black rounded-3xl shadow-lg p-6 hover:scale-110 ease-in-out">
              <img
                src={Image1}
                alt="Specialist 4"
                className="w-24 h-24 mx-auto rounded mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Cancer Medical Lab</h3>
              <p className="text-sm">
                State-of-the-art diagnostics for early detection, staging, and monitoring of cancer with precision.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-black py-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="w-3/4 lg:w-1/3 flex justify-center">
            <img
              src={Choose}
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#0288D1]">Why Choose Us?</h2>

            <ul className="space-y-4">
              <li className="flex items-start justify-center lg:justify-start">
                <AiOutlineCheck className="text-green-400 text-2xl font-bold mr-2" />
                <p>Experienced and qualified medical professionals.</p>
              </li>
              <li className="flex items-start justify-center lg:justify-start">
                <AiOutlineCheck className="text-green-400 text-2xl mr-2" />
                <p>State-of-the-art facilities and technology.</p>
              </li>
              <li className="flex items-start justify-center lg:justify-start">
                <AiOutlineCheck className="text-green-400 text-2xl mr-2" />
                <p>Personalized patient care and attention.</p>
              </li>
              <li className="flex items-start justify-center lg:justify-start">
                <AiOutlineCheck className="text-green-400 text-2xl mr-2" />
                <p>Comprehensive healthcare services under one roof.</p>
              </li>
              <li className="flex items-start justify-center lg:justify-start">
                <AiOutlineCheck className="text-green-400 text-2xl mr-2" />
                <p>Convenient appointment scheduling and consultation.</p>
              </li>
            </ul>

          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 justify-center text-center lg:text-left">
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0288D1] mb-4">
              The Future of Quality Health
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              At Indrayani Multispeciality Hospital, we are committed to advancing healthcare
              services by integrating modern technology with expert medical care. Our goal is to
              ensure every individual has access to quality treatment with a patient-centered approach.
              Together, we strive for a healthier and brighter future for all.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src={Future}
              alt="Future of Health"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

    </>

  );
};

export default HeroSection;
