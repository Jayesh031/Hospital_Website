import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add("overflow-hidden"); // Disable scrolling
    } else {
      document.body.classList.remove("overflow-hidden"); // Re-enable scrolling
    }
  };

  return (
    // bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 #0288D1
    <nav className="  bg-secondary text-white sticky top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img className="h-14 rounded-xl" src={Logo} alt="Logo" />
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold">
              <span className="font-bold">Indrayani</span>
            </h1>
            <h3>Multispecialist Hospital</h3>
          </div>
        </div>

        {/* Navigation Links (Visible on medium and larger screens) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className="hover:text-gray-200 font-semibold"
              activeClassName="text-gray-200"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className="hover:text-gray-200 font-semibold">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="hover:text-gray-200 font-semibold">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appointment"
              className="hover:text-gray-200 font-semibold"
              activeClassName="text-gray-200"
            >
              Appointment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-gray-200 font-semibold"
              activeClassName="text-gray-200"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right Side Buttons (Visible on medium and larger screens) */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/signup"
            className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100 font-semibold"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer text-3xl"
          onClick={toggleMenu}
        >
          {menuOpen ? <span>&times;</span> : <span>&#9776;</span>}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-tertiary  text-white text-[1rem] p-6">
          <ul className="space-y-4 text-center">
            <li>
              <NavLink
                to="/"
                className="hover:text-gray-300 font-semibold"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className="hover:text-gray-300 font-semibold"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/services'
                className="hover:text-gray-300 font-semibold"
                onClick={toggleMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appointment"
                className="hover:text-gray-300 font-semibold"
                onClick={toggleMenu}
              >
                Appointment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-gray-300 font-semibold"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="mt-6">
            <NavLink
              to="/signup"
              className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100 font-semibold"
              onClick={toggleMenu}
            >
              Connect
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;