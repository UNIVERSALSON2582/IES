import React from "react";

function Input({ name, label, id, className,placeholder, touched, error,values,icon, ...rest }){

    return(
        <>
        {touched && error && <div className="text-red-600">{error}</div>}
        <div className="relative flex items-center mt-4">
        <div className="absolute flex flex-col ml-2 text-xl text-black">{icon}</div>
        <input 
        id={id}
          className='px-8 py-2 border border-gray-400 hover:border-yellow-600 font-mono'
          placeholder={placeholder}
          values={values}
          name={name}
          {...rest}
          
        />
        
        </div>
        </>
  
    )
}

export default Input;