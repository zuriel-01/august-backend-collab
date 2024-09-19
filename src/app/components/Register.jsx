'use client'
import React from 'react'
import { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import Image from 'next/image';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Link from 'next/link';
import axios from 'axios';





const Register = () => {

  const [show, setShow] = useState(false);
  const [usernameErr, setUsernameErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [contactErr, setContactErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)


  const [username, setUsername] = useState(false)
  const [email, setEmail] = useState(false)
  const [contact, setContact] = useState(false)
  const [password, setPassword] = useState(false)






  const toggle = () => {
    setShow(!show)
  }

  const submithandler = async (e) => {
    console.log(e);
    // prevents default form submission
    e.preventDefault();

    if(!username){
      setUsernameErr("fill in username")
    }
    // to make the error highlight on the input to go off , use the else
    // else{
    //   setUsernameErr(false)
    // }

    else  if(!email){
      setEmailErr("please fill in email")
    }
    else  if(!contact){
      setContactErr("please fill in contact")
    }

    else  if(!password){
      setPasswordErr("please fill in password")
    }

    else{

      // fetch API here
      try {
        const res= await axios.post('http://localhost:3000/api/regsiter', {username,email,contact,password})
        console.log(res)
        
      } catch (error) {
          console.log(error.message)
      }

      // using teh fetch method
      // const response =await fetch('http://localhsot:3000/api/register', {
      //   headers:{

      //     " Content-Type":"application/json",
      //   },
      //   method:"POST",
      //   body:JSON.stringify({username,email,contact,password})


      // })


    }
    
  }



  return (
    <div className='h-[100vh] flex flex-col justify-center items-center bg'>
      <div className='h-[420px] w-72 bg-blue-300 bg-opacity-5 rounded-md backdrop-blur-xl bg-transparent shadow-cyan-100  px-4 m-4 relative shadow-md'>

        <h2 className='text-2xl font-semibold bg-gradient-to-r from-blue-100  to-cyan-700 text-transparent bg-clip-text py-7 text-center'>Register</h2> <div className='opacity-50'><Image width={0} height={0} className='w-8 absolute top-3 right-2' src="/icon1.png" alt="" /></div>

        <div>
          <form onSubmit={submithandler} action="" className='flex flex-col items-center gap-4 '>
            <div className='w-full relative'>
              <input onChange={(e)=>setUsername(e.target.value)} className={`${usernameErr && "border-2 border-red-600 wobble-hor-bottom" || " "  } border-2 border-white  w-full rounded-full py-1 px-4 bg-transparent text-sm outline-none placeholder-cyan-700 text-cyan-700 text-opacity-90 placeholder-opacity-70`} placeholder='Username' type="text" />
              <FaUser className='absolute top-2 right-4 text-sm text-cyan-700 opacity-50 z-10' />
            </div>

            <div className='w-full relative'>
              <input onChange={(e)=>setEmail(e.target.value)}  className='border-2 border-white  w-full rounded-full py-1 px-4 bg-transparent text-sm outline-none placeholder-cyan-700 text-cyan-700 text-opacity-90  placeholder-opacity-70' placeholder='Email' type="email" />
              <MdEmail className='absolute top-2 right-4 text-sm text-cyan-700 opacity-50 z-10' />
            </div>

            <div className='w-full relative'>
              <input onChange={(e)=>setContact(e.target.value)} className='border-2 border-white  w-full rounded-full py-1 px-4 bg-transparent text-sm outline-none placeholder-cyan-700 text-cyan-700 text-opacity-90  placeholder-opacity-70' placeholder='Contact' type="number" />
              <FaPhone className='absolute top-2 right-4 text-sm text-cyan-700 opacity-50 z-10' />
            </div>

            <div className='w-full relative'>
              <input onChange={(e)=>setPassword(e.target.value)} className='border-2 border-white  w-full rounded-full py-1 px-4 bg-transparent text-sm outline-none placeholder-cyan-700 text-cyan-700 text-opacity-90  placeholder-opacity-70' placeholder='Password' type={(show === false) ? 'password' : 'text'} />
              <FaLock className='absolute top-2 right-4 text-sm text-cyan-700 opacity-50 ' />
            </div>

            <div className='w-full relative text-xs text-center align-middle flex items-center gap-1'>
              <p className='text-cyan-700 ml-auto flex items-center gap-1 text-center mr-3 cursor-pointer'>
                {
                  (show === false ? <FaEyeSlash className='text-cyan-700 text-opacity-45' onClick={toggle} /> : <FaEye className='text-cyan-700 opacity-45 ' onClick={toggle} />)
                }
                <span className=' text-cyan-700 opacity-60'>Show password</span>
              </p>
            </div>

            <button className="glass rounded-full py-2 mt-1 px-3 shadow-md bg-sky-700  bg-opacity-50 hover:bg-opacity-70 hover:translate-y-px duration-300 text-white text-center font-semibold">Create Account</button>
          </form>

          <div className='flex text-center items-center justify-center py-4 '>
            <span className='text-sm flex gap-1 bg-gradient-to-r from-sky-600  to-cyan-900 text-transparent bg-clip-text text-center'>Already have an account?<span className='text-md font-semibold bg-gradient-to-r from-blue-100  to-sky-600 text-transparent bg-clip-text cursor-pointer'>
              <Link href="login" >Sign in</Link>
            </span></span>
          </div>

        </div>
      </div>

     
    </div>
  )
}

export default Register

