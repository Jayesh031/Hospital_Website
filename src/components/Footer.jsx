import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            Indrayani Hospital is dedicated to delivering exceptional healthcare services with cutting-edge facilities and a patient-centered approach. Our team ensures every patient receives personalized attention and the highest standards of care.
          </p>
          <p className="text-sm leading-relaxed mt-2">
            Connect with us on social media for updates and health tips.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Icons */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-[#019fe3] rounded-full hover:bg-gray-200 hover:scale-110 transition ease-in-out"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-[#019fe3] rounded-full hover:bg-gray-200 hover:scale-110 transition ease-in-out"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-[#019fe3] rounded-full hover:bg-gray-200 hover:scale-110 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-[#019fe3] rounded-full hover:bg-gray-200 hover:scale-110 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Second Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-3">
            <li>
              <a href="/" className="hover:underline hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/appointment" className="hover:underline hover:text-gray-200">
                Book Appointment
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline hover:text-gray-200">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline hover:text-gray-200">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact & Location</h3>
          <p className="text-sm">
            <strong>Indrayani Hospital</strong>
          </p>
          <p className="text-sm">
            2nd Floor, Shop No. 210-214, Parshwa Capital, Dabhade Sarkar Chowk, Kalajewadi, Charholi Budruk, Pune, Maharashtra 412105
          </p>
          <p className="text-sm mt-2">Phone: +91 8424006872</p>
          <p className="text-sm">Email: contact@indrayanihospital.com</p>
          <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
            {/* Google Map Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.550858676204!2d73.87581661487804!3d18.618364787350267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0e54e48228f%3A0xd5e77e7550124f7e!2sParshwa%20Capital%2C%20Charholi%20Budruk%2C%20Pune%2C%20Maharashtra%20412105!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="120"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-10 border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()} Indrayani Hospital. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
