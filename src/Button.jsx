import React, { Children } from 'react';


const Button = ({onClick,children}) =>{

    return(
        <div className='mt-2'>
        <button onClick={onClick} className='bg-orange-500 font-bold py-2 px-4 rounded-md  text-white inline-block'>{children}</button>
        </div>
    )
}

export default Button;