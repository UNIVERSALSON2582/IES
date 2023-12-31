import React from "react";



const Footer= ()=>{
   

    return(
        
<div class=" bg-gradient-to-r from-blue-500 to-purple-500">
    <div class="max-w-2xl mx-auto py-10">
        <div class=" flex flex-col md:flex-row md:justify-between items-center text-sm text-black-400">
            <p class="order-2 md:order-1  md:mt-0"> &copy; 𝕀𝕟𝕥𝕖𝕘𝕣𝕒𝕥𝕖𝕕 𝔼𝕕𝕦𝕔𝕒𝕥𝕚𝕠𝕟 𝕊𝕪𝕤𝕥𝕖𝕞, 2023. </p>
            <div class="order-1 md:order-2">
                <span class="px-2">About us</span>
                <span class="px-2 border-l">Contact us</span>
                <span class="px-2 border-l">Privacy Policy</span>
            </div>
        </div>
    </div>
</div>
)
}

export default Footer;