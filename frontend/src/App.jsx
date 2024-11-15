import React, { useState, useEffect } from 'react';
import { FaMoon, FaPlaneArrival, FaPlaneDeparture, FaSun } from 'react-icons/fa';
import './index.css';
import { FaPlaneUp } from 'react-icons/fa6';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Add or remove dark mode class from <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-black transition-all duration-500 relative">
      {/* Dark Mode Toggle Button */}
      <button
        className="absolute top-4 right-4 flex items-center gap-2 p-3 bg-gray-900 dark:bg-black text-white dark:white rounded-full shadow-lg focus:outline-none"
        onClick={toggleDarkMode}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Flowing Banner with Plane
      <div class="w-full overflow-hidden mt-20 relative">
        <div class="animate-fly-banner flex items-center">
        <FaPlaneUp className='text-black plane-icon dark:text-white'/>
          <p class="banner-text text-xl text-black dark:text-white font-bold ml-4 bg-black px-6 py-2 shadow-lg">
           Agentic! Flow coming in your way
          </p>
        </div>
      </div> */}

      {/* Centered Content Section with Rounded Border */}
      <div className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-black rounded-3xl p-8 mt-12 shadow-xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-black text-center text-5xl font-bold dark:text-white">
            Coming Soon.....
          </h1>
          <h2 className="text-black text-center text-3xl font-semibold mt-4 dark:text-white">
            We are cooking something special!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
