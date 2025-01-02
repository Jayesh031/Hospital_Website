import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Doctor1 from "../assets/Doctor1.jpg";
import Doctor2 from "../assets/Doctor2.jpg";
// import Main from "../assets/main.jpg"

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
            photo: 'https://via.placeholder.com/48',
            name: "Alice Johnson",
            review: "The staff was very helpful, and the doctors are highly professional."
        },
        {
            photo: "https://via.placeholder.com/48",
            name: "Michael Lee",
            review: "Clean and well-equipped hospital. Highly recommend!"
        },
        {
            photo: "https://via.placeholder.com/48",
            name: "Sophia Turner",
            review: "Great experience, the best healthcare services I've ever received."
        },
        {
            photo: "https://via.placeholder.com/48",
            name: "Daniel Kim",
            review: "Doctors were kind and attentive. Wonderful support team."
        },
        {
            photo: "https://via.placeholder.com/48",
            name: "Olivia Brown",
            review: "Top-notch facilities and exceptional patient care."
        },
        {
            photo: "https://via.placeholder.com/48",
            name: "Emma Wilson",
            review: "I felt at home during my stay, and the recovery was smooth."
        },
        {
            photo: "https://via.placeholder.com/48",
            name: "James Garcia",
            review: "Very knowledgeable doctors and courteous staff."
        }
    ];


    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Heading and Paragraph */}
            <div className="py-12 text-center bg-gray-100 mt-[5.5rem]">
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
                        className="flex space-x-6 transition-transform duration-300 ease-linear"
                        id="testimonialScroll"
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 rounded-lg shadow-lg p-6 min-w-[300px] flex-shrink-0"
                            >
                                {/* First Row: Photo and Name */}
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.photo}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h3 className="text-lg font-bold">{testimonial.name}</h3>
                                    </div>
                                </div>
                                {/* Second Row: Review */}
                                <p className="italic text-gray-700">"{testimonial.review}"</p>
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
