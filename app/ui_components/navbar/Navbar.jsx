import React, { useState } from 'react';
import Searchbar from './Searchbar';
import { AiFillCloseSquare } from "react-icons/ai";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        {/* Menu button for toggling sidebar */}
        <div>
          <button
            onClick={toggleSidebar}
            className="btn btn-square bg-gradient-to-r from-purple-500 to-orange-500 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2 2h20M2 12h20M2 22h20"
              ></path>
            </svg>
          </button>
        </div>

        {/* Center link */}
        <div className="px-4">
          <a
            className="px-4 justify-items-start btn btn-xs bg-orange-500 hover:bg-orange-300 rounded-2xl text-center"
            href="../users"
          >
            Gallery
          </a>
        </div>

        {/* Search bar */}
        <div className="flex-1 hidden md:flex justify-center">
          <Searchbar />
        </div>

        {/* Optional additional button */}
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-orange-800 text-white transform' ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={toggleSidebar} className="text-gray-300 hover:text-white">
            <AiFillCloseSquare size={30} />
          </button>
        </div>
        {/* Add your sidebar content here */}
        <div className="mt-20 p-4">
          <a href="./">
            <u>HOME</u>
          </a>
        </div>
        <div className="p-4">
          <a href="./">
              <u>AVAILABILITY</u>
          </a>
        </div>
        <div className="p-4">
          <a href="./">
              <u>RATING/REVIEWS</u>
          </a>
        </div>
        <div className="p-4">
          <a href="./">
              <u>SUPPORT</u>
          </a>
        </div>
        <div className="p-4">
          <a href="./">
              <u>INFORMATION</u>
          </a>
        </div>
      </div>

      {/* Overlay for when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
