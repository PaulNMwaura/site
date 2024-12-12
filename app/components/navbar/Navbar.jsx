'use client';

import React, { useState } from 'react';
import Searchbar from './Searchbar';
import { AiFillCloseSquare } from "react-icons/ai";
import { 
  FaSignOutAlt,
  FaHome,
  FaCalendarAlt,
  FaStarHalfAlt,
  FaHandsHelping,
  FaInfoCircle
 } from "react-icons/fa";
import { signOut } from 'next-auth/react';

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
          className="btn btn-square bg-gradient-to-r from-purple-500 to-orange-500 rounded-xl z-20"
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
        {/* <div className="px-4">
          <a
            className="px-4 btn btn-xs bg-orange-500 hover:bg-orange-300 rounded-2xl text-center"
            href="../users"
          >
            Gallery
          </a>
        </div> */}

        {/* Search bar */}
        <div className="-ml-36 sm:-ml-10 md:mx-auto flex-1 flex justify-center"> 
          <div className="w-16 sm:w-24 md:w-32 lg:w-48 xl:w-64 mx-2"> {/* Adjusted width */}
            <Searchbar />
          </div>
        </div>

        {/* Optional additional button */}
        <div className="flex-none">
          <button onClick={() => signOut()} className="btn btn-square btn-ghost">
            <FaSignOutAlt size={25} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed overflow-auto inset-y-0 left-0 w-64 bg-orange-700 text-white transform' ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex items-center justify-between p-4 border-b border-yellow-300">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={toggleSidebar} className="text-gray-300 hover:text-white">
            <AiFillCloseSquare size={30} />
          </button>
        </div>
        {/* Add your sidebar content here */}
        <div className="flex flex-row mt-4 gap-4">
          <FaHome size={25}/>
          <a href="./Homepage">
            <u>Home</u>
          </a>
        </div>
        <div className="pt-4 flex flex-row gap-4">
          <FaCalendarAlt size={25}/>
          <a href="./">
              <u>Availability</u>
          </a>
        </div>
        <div className="pt-4 flex flex-row gap-4">
          <FaStarHalfAlt size={25}/>
          <a href="./">
              <u>Rating/Reviews</u>
          </a>
        </div>
        <div className="pt-4 flex flex-row gap-4">
          <FaHandsHelping size={25}/>
          <a href="./">
              <u>Support</u>
          </a>
        </div>
        <div className="pt-4 flex flex-row gap-4">
          <FaInfoCircle size={25}/>
          <a href="./">
              <u>Information</u>
          </a>
        </div>
        <div className="pt-4 mb-0 flex flex-row items-center gap-4">
          <FaSignOutAlt size={25} />
          <button onClick={() => signOut()} >
            Signout
          </button>
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
