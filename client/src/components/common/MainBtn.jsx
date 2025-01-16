import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const MainBtn = ({text}) => {
  return (
    <div class=' hover:border-2 hover:border-white cursor-pointer shadow-md w-[250px] h-[35px] text-brown-50 bg-pink-100 rounded-full font-serif font-bold flex flex-row justify-center gap-7 px-5 content-center '>
        <div className=' my-auto'>
        {text}
        </div>
      
      <FaArrowRightLong className='text-brown-50 my-auto'/>
    </div>
  )
}

export default MainBtn
