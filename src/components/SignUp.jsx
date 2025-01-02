
// {/* Left Side - Image */}
// <div className="hidden md:block md:w-1/2">
// <img
//   src="https://source.unsplash.com/600x800/?hospital,healthcare"
//   alt="Sign Up"
//   className="w-full h-full object-cover rounded-l-lg"
// />
// </div>
//=========================================================================================================================

import React, { useState } from "react";
// import Logo from "../assets/SignupLogo.png";
import Video from "../assets/logo_video.mp4"
import Lock from "../assets/lock-fill.svg";
import Unlock from "../assets/lock-unlock-fill.svg";
import Google from "../assets/google.svg";
import Apple from "../assets/apple.svg";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state,setState] = useState('Sign Up');
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg w-[90%] max-w-4xl p-4">
        {/* Left Side - Video*/}
        <div className="hidden md:block md:w-1/2">
          <video
            className="rounded-lg shadow-lg w-ful h-full object-cover content-between"
            autoPlay
            muted
            playsInline
          >
            <source
              src={Video} // video URL
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="sm:text-3xl md:text-4xl text-2xl font-semibold text-[#019fe3] text-left ">{state === 'Sign Up' ? 'Create an Account' : 'Welcome Back!'}</h2>
          {/* <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-2 mb-4"></div> */}
          {
            state === 'Sign Up' ?
            <p className="text-gray-600 text-left mb-6 mt-2">
            Already Have an account? <span onClick={()=>setState('Log In')}  className="text-blue-600 cursor-pointer">Login</span>
            </p> :  
            <p className="text-gray-600 text-left mb-6 mt-2">
              Wanted to Create New One? <span  onClick={()=>setState('Sign Up')} className="text-blue-600 cursor-pointer">Sign Up</span>
            </p>
          }

          <form>
            {/* First Name and Last Name */}
            {
              state === 'Sign Up' &&  <div className="flex space-x-4 mb-4">
              
              <div className="w-1/2">
                <label className="block text-gray-700 font-medium mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="First Name"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Last Name"
                />
              </div>
            </div>              
            }
            

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-6 relative">
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 "
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <img src={Unlock} alt="Unlock" className="w-6 h-6 mt-8" />
                ) : (
                  <img src={Lock} alt="Lock" className="w-6 h-6 mt-8" />
                )}
              </button>
            </div>

            {/* Sign Up Button */}
            <button className="w-full bg-[#019fe3] text-white py-3 rounded-lg font-semibold  hover:bg-[#0288D1]"> {/*bg-blue-600*/}
            {state === 'Sign Up' ? 'Sign Up' : 'Log In'}
            </button>

            {/* Line */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-600"></div>
              <span className="mx-4 text-gray-500">{state === 'Sign Up' ? 'Or Register With' : 'Or Continue With'}</span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>

            {/* Social Sign-Up */}
            <div className="flex justify-between space-x-4">
              <button className="flex items-center justify-center w-1/2 bg-gray-100 py-3 rounded-lg shadow hover:bg-gray-200">
                <img
                  src={Google}
                  alt="Google"
                  className="w-7 h-7 mr-2"
                />
                Google
              </button>
              <button className="flex items-center justify-center w-1/2 bg-gray-100 py-3 rounded-lg shadow hover:bg-gray-200">
                <img
                  src={Apple}
                  alt="Apple"
                  className="w-7 h-7 mr-2"
                />
                Apple
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
