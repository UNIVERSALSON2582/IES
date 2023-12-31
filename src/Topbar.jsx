import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import Button from './Button';

const Topbar = ({user,signOut}) => {
  let text;

  if (user) {
    text = user.full_name;
  } 
  return (
    <div className="bg-gradient-to-r  w-full from-blue-500 to-purple-500 p-4 flex justify-between items-center shadow-lg">
      <Logo />

      <div className="flex gap-6 font-semibold text-white text-lg">
        <Link to="/" className="hover:text-blue-300 transition duration-300 ease-in-out">Home</Link>
        <Link to="/about" className="hover:text-blue-300 transition duration-300 ease-in-out">About</Link>
        {user && <Link to="/Profile" className="hover:text-blue-300 transition duration-300 ease-in-out">Dashboard</Link>}
        <Link to="/contact" className="hover:text-blue-300 transition duration-300 ease-in-out">Contact</Link>
      </div>
      {user&& <Link className='text-orange-600 text-center font-bold border-y-2 border-red-500' to="/Profile">{text}</Link>}
      {user && <Link to="/LoginPage"><Button onClick={signOut}>Log Out</Button></Link>}
      {!user&&<Link to="/LoginPage" className="text-white font-semibold text-lg hover:text-blue-300 transition duration-300 ease-in-out">Login ➲</Link>}
    </div>
  );
}

export default Topbar;
