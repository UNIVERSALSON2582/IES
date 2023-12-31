import React from "react";

function MainBar() {
  return (
    <div className="flex  justify-between items-center p-8 mt-20 ">
      <div className="max-w-2xl">
        <h1 className="text-green-800 text-4xl font-extrabold italic mb-4">
          Welcome to the Integrated Education Platform
        </h1>
        <p className="text-gray-700 text-lg leading-7 font-serif">
          Integrated Educational Platform that provides students with the
          ability to upload, manage, and share notes, access live lectures, and
          engage in e-commerce activities for purchasing study materials and
          accessories. The platform's main objective is to enhance the learning
          experience and convenience of students by bringing together these
          essential features in one unified system.
        </p>
      </div>
      <div className="w-1/2">
        <img
          className="w-full h-auto rounded-lg"
          src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Integrated Education Platform"
        />
      </div>
    </div>
  );
}

export default MainBar;
