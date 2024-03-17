import React, { useRef } from "react";
import { FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

function Otppage() {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (index, value) => {
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index, value, event) => {
    if (event.keyCode === 8 && !value && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-[10%]  p-6 bg-[#2c2c2c] rounded-lg shadow-lg transform hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-center mb-4">
        <FaKey className="text-blue-500 text-4xl mr-2" />
        <h2 className="text-lg font-semibold text-gray-200">Enter OTP</h2>
      </div>
      <p className="text-gray-400 mb-4">Please enter the 4-digit OTP sent to your email or phone.</p>
      <div className="flex justify-between items-center mb-6">
        {inputRefs.map((inputRef, index) => (
          <input
            key={index}
            ref={inputRef}
            type="text"
            maxLength="1"
            className="w-12 h-12 bg-[#444] border border-gray-300 rounded-md text-center text-2xl font-semibold text-gray-200 focus:outline-none focus:border-blue-500 transition-all duration-200"
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleBackspace(index, e.target.value, e)}
          />
        ))}
      </div>
      <Link to="/home">
      <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none transition-colors duration-300">
        Verify
      </button>
      </Link>
    </div>
  );
}

export default Otppage;
