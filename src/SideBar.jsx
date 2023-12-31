import React from "react";
import { FaBook, FaUpload, FaVideo, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex flex-col py-12 bg-blue-900 text-white text-2xl max-h-screen max-h-fit w-48">
      <Link   
        to="/YourNotes"
        className="flex items-center px-6 py-3 border-b border-gray-700 hover:bg-blue-700"
      >
        <FaBook className="mr-2" />
        Your Notes
      </Link>
      <Link
        to="/CreateNote"
        className="flex items-center px-6 py-3 border-b border-gray-700 hover:bg-blue-700"
      >
        <FaUpload className="mr-2" />
        Upload Notes
      </Link>
      <a
        href="#"
        className="flex items-center px-6 py-3 border-b border-gray-700 hover:bg-blue-700"
      >
        <FaVideo className="mr-2" />
        Lectures
      </a>
      <a
        href="/Profile"
        className="flex items-center px-6 py-3 border-b border-gray-700 hover:bg-blue-700"
      >
        <FaUser className="mr-2" />
        Profile
      </a>
    </div>
  );
}

export default Sidebar;
