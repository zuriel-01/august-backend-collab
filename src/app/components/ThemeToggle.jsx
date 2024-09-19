"use client"
import React, { useContext, useState } from 'react'
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
// import { ThemeContext } from '../context/ThemeContext';

export default function ThemeToggle() {
  // use the the theme and toggle context
  // const {theme,toggle}=useContext(ThemeContext);
   
    
    
  return (
    <div className='relative flex flex-col justify-between gap-2 w-max  p-3 rounded-md border border-black'>
      <FaSun />
      <div className={`w-2 h-2 rounded-full  bg-black p-2 absolute transition-all ease-in duration-[2000]  ${theme ? "top-3" : "bottom-3" }`}></div>
      <BsFillMoonStarsFill />

      <h1 className="text-green">TEsting</h1>
    </div>
  )
}
