import React from "react";

const About = () =>{

    return(
        <div class="sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 font-bold border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">Our Company</span>
            </h2>
            <p class="text-gray-700">
            Integrated Educational Platform that provides students with the ability to upload, manage, and share notes, access live lectures, and engage in e-commerce activities for purchasing study materials and accessories. The platform's main objective is to enhance the learning experience and convenience of students by bringing together these essential features in one unified system.
            </p>
        </div>
    </div>
</div>
    )

}

export default About;