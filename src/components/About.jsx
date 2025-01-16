import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Doctor1 from "../assets/Doctor1.jpg";
import Doctor2 from "../assets/Doctor2.jpg";
import Testti1 from '../assets/Testti-1.png'
import Testti2 from '../assets/Testti-2.png'
import Testti3 from '../assets/Testti-3.png'
const About = () => {
    const teamMembers = [
        {
            name: "Dr. Pravin Sunbe",
            education: "(MBBS, DGO)",
            specialty: "Gynecologist",
            image: Doctor1,
            description: "Specialist in women's health, providing expert care in pregnancy, childbirth, and reproductive health with over a decade of experience.",
        },
        {
            name: "Dr. Priyanka Sunbe",
            education: "(MBBS, FCPS Surgeon)",
            specialty: "General Surgeon",
            image: Doctor2,
            description: "Skilled in performing a wide range of surgical procedures with precision and care, specializing in the treatment of various medical conditions through surgery.",
        },
    ];

    const testimonials = [
        {
            photo: Testti1,
        },
        {
            photo: Testti2,
        },
        {
            photo: Testti3,
        },
        {
            photo:Testti1,
        },
        {
            photo: Testti2,
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Heading and Paragraph */}
            <div className="py-12 text-center bg-gray-100 mt-[rem]">
                <h1 className="text-4xl font-bold mb-4 text-[#0288D1]">About Us</h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Welcome to our hospital, where we are committed to providing
                    exceptional healthcare services with compassion and innovation.
                </p>
            </div>

            {/* Mission and Vision Section */}
            <div className="py-12 px-10 md:px-16 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-blue-100 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-center mb-4">Our Mission</h2>
                        <p className="text-gray-700 text-center">
                        To provide accessible, high-quality healthcare through a dedicated team of professionals, advanced technology, and a commitment to community well-being.
                        </p>
                    </div>
                    <div className="bg-green-100 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-center mb-4">Our Vision</h2>
                        <p className="text-gray-700 text-center">
                        To become a trusted beacon of hope and healing, delivering exceptional, patient-centered care with innovation and compassion.
                        </p>
                    </div>
                </div>
            </div>

            {/* Meet Our Team Section */}
            <div className="py-12 px-6 md:px-16 bg-gray-100">
                <h2 className="text-3xl font-bold text-center mb-8 text-[#0288D1]">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 text-center max-w-md mx-auto"
                            style={{ minHeight: "400px" }} // Ensure consistent box height
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-45 h-45 mx-auto rounded-xl mb-4" // Increased photo size
                            />
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-lg font-semibold text-gray-600">{member.education}</p>
                            <p className="text-sm text-blue-500">{member.specialty}</p>
                            <p className="text-gray-700 mt-2">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>



            {/* Testimonials Section */}
            <div className="py-12 px-6 md:px-16 bg-white">
                <h2 className="text-3xl font-bold text-center mb-8 text-[#0288D1]">Testimonials</h2>
                <div className="overflow-hidden relative">
                    <div
                        className="flex mb-3 space-x-6 transition-transform duration-300 ease-linear"
                        id="testimonialScroll"
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 rounded-lg shadow-lg overflow-hidden min-w-[300px] flex-shrink-0"
                                style={{ height: "300px" }}
                            >
                                <img
                                src={testimonial.photo}
                                alt={`Testimonial ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Footer */}
            <Footer />
        </div>
    );
};

export default About;
