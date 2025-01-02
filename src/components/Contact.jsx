import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
        <Navbar />
      {/* Contact Information Section */}
      <section className="bg-gray-50 py-16 px-4 mt-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0288D1] mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are here to assist you with all your healthcare needs. Feel free to reach out to us with your queries or concerns. 
            Our team will respond promptly to ensure your satisfaction.
          </p>
        </div>
      </section>

      {/* Query Form Section */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-gray-100 shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-[#0288D1] mb-6 text-center">Post a Query</h3>
            <form>
              {/* First Row: Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0288D1]"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0288D1]"
                  required
                />
              </div>
              {/* Second Row: Mobile Number and City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0288D1]"
                  required
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0288D1]"
                  required
                />
              </div>
              {/* Third Row: Description */}
              <div className="mb-6">
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full h-24 px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#0288D1]"
                  required
                ></textarea>
              </div>
              {/* Fourth Row: Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#0288D1] text-white px-6 py-2 rounded-lg hover:bg-[#0277BD] focus:outline-none focus:ring-2 focus:ring-[#0288D1]"
                >
                  Submit Query
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-[#0288D1] text-white py-6 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Indrayani Multispeciality Hospital. All rights reserved.</p>
        </div>
      </footer> */}
      <Footer />
    </div>
  );
};

export default Contact;
