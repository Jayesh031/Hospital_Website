import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    age: "",
    gender: "",
    date: null,
    time: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      age: "",
      gender: "",
      date: null,
      time: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success toast
    toast.success("Your appointment has been confirmed!", {
      position: "top-center",
      autoClose: 2000,
    });

    // Reset form after 2 seconds
    setTimeout(() => {
      resetForm();
    }, 2000);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hospital Information */}
      <section className="bg-gray-50 text-gray-500 text-center p-8 mt-[70px]">
        <h2 className="text-xl font-semibold mb-2">Welcome to Indrayani Hospital</h2>
        <p className="text-sm">
          Our hospital operates from <strong>10:00 AM to 6:00 PM</strong>. Please book your appointments within this time window.
        </p>
        <p className="text-sm mt-2">
          Follow our <strong>rules and guidelines</strong> for a smooth and efficient visit.
        </p>
      </section>

      {/* Appointment Form */}
      <section className="flex justify-center items-center p-8 bg-white">
        <div className="bg-gray-50 shadow-xl rounded-xl p-8 w-full max-w-2xl">
          <h3 className="text-2xl font-semibold text-center text-[#0288D1] mb-4">Book Your <span>Appointment</span></h3>
          <form onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-400"
                required
              />
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
                placeholder="Middle Name"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-400"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-400"
                required
              />
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-400"
                required
              />
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-400"
                required
              />
            </div>

            {/* Age and Gender */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Age"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-400"
                required
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-400"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <DatePicker
                selected={formData.date}
                onChange={(date) => setFormData((prevData) => ({ ...prevData, date }))}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a Date"
                className="p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-400"
                required
              />
              <select
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-400"
                required
              >
                <option value="">Select Time</option>
                {Array.from({ length: 9 }, (_, i) => i + 10).map((hour) => (
                  <option key={hour} value={`${hour}:00`}>
                    {`${hour}:00`}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-2 font-semibold rounded-md ${
                Object.values(formData).every((value) => value)
                  ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-gray-100 cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!Object.values(formData).every((value) => value)}
            >
              Book Appointment
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Appointment;
