"use client"
import React, { useState } from 'react'
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function ThemeToggle() {
    const [theme,setTheme]=useState(true)
    const togglerHandler=()=>{
        setTheme(!theme)
    }
    
  return (
    <div className='relative flex flex-col justify-between gap-2 w-max  p-3 rounded-md border border-black'>
      <FaSun />
      <div onClick={togglerHandler} className={`w-2 h-2 rounded-full  bg-black p-2 absolute transition-all ease-in duration-[2000]  ${theme ? "top-3" : "bottom-3" }`}></div>
      <BsFillMoonStarsFill />

      <h1 className="text-green">TEsting</h1>
    </div>
  )
}
