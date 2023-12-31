import React from "react";
import Sidebar from "./SideBar";

const Profile = ({user}) =>{
    console.log(user);
    return(
        <div className="flex  bg-yellow-200">
            <Sidebar/>
        <div className=" mt-16 h-screen ml-36  justify-self-center  items-center justify-center bg-yellow-200 ">
            <h1 className="text-3xl  mb-4 font-bold  text-red-700">{"Hello,"+user.full_name}</h1>
            <div className="flex flex-col bg-white  border border-double rounded-md border-4 border-green-500 p-2">
            <img className="w-36 self-center" src="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"/>
            <span className="text-xl font-bold text-black-600 bg-gray-300">Id: </span><span className="text-xl font-bold text-blue-600">{user.id}</span>
            <span className="text-xl font-bold text-black-600 bg-gray-300">Name: </span><span className="text-xl font-bold text-blue-600">{user.full_name}</span>
            <span className="text-xl font-bold text-black-600 bg-gray-300">Email: </span><span className="text-xl font-bold text-blue-600">{user.email}</span>
            <span className="text-xl font-bold text-black-600 bg-gray-300">Created On: </span><span className="text-xl font-bold text-blue-600">{user.created_at
}</span>
</div>
        </div>
        </div>
    )
}

export default Profile;