import React from 'react'
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='px-5 xl:px-10 md:w-1/2 mb-10'>
        <h1 className='mt-6 mb-10 text-5xl x1:text-6xl text-center font-bold text-[#1E1D30] leading-nomal xl:leading-relaxed'>Choose the Tips you need!</h1>
        <form action='/search' className='bg-[#ffddbe] p-4 rounded relative flex items-center'>
            <IoSearch className='w-5 h-5 mr-2 text-[#ff6d18]' />
            <input className='bg-[#ffddbe] outline-none w-full placeholder:text-[#ff6d18]' name='query' type='text' placeholder='Search for Tips!' id='search' required="" />
        </form>
    </div>
  )
}

export default Hero