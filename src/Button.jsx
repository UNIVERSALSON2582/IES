import React, { Children } from 'react';


const Button = (props,{onClick}) =>{

    return(
        <div className='mt-2'>
        <button onClick={onClick} className='bg-orange-500 font-bold py-2 px-4 rounded-md  text-white inline-block'>{props.children}</button>
        </div>
    )
}

export default Button;