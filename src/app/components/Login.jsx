'use client'
import React from 'react'

import { useState } from 'react';
import Image from 'next/image';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Link from 'next/link';
import {signIn} from "next-auth/react"
import { useRouter } from 'next/navigation';

const Login = () => {
  const router=useRouter()

    const [show, setShow] = useState(false);
    const [err, setErr] = useState(false)
    const [err1, setErr1] = useState(false)

    const [email,setEmail] = useState(false)
    const [password,setPassword] = useState(false)
    
    const toggle = () => {
        setShow(!show)
    }

    // 
    const submithandler =async (e) => {
      e.preventDefault()
      if(!email){
        setErr("please provide email")
      }
      else if (!password){
        setErr1(
            "plase provide passwword"
        )
      }
      else{
        // send credentials to api/auth/[...nextauth]/
      // we use redirect to show error on the login page instaed of redirecting to the default error page
      const res=await signIn("credentials",{email,password,redirect:false})
      console.log("response :" , res )

      if(res.status===200){
          router.replace('/')
      }
      else{
        setErr("invalid credentials")
      }
    }
    // hamdle login wothout Next-Auth
        // console.log(e);
        
        // e.preventDefault();
        // // fetch API here
        //   const res=axios.post("http://localhost:3000/api/login", {
        //     email,password
        // })
        console.log("Form submitted");
    }
    
  return (
    <div className='h-[100vh] flex flex-col justify-center items-center bg'>
      <div className='h-[340px] flex flex-col  justify-center w-72 bg-blue-300 bg-opacity-5 rounded-md backdrop-blur-xl bg-transparent shadow-cyan-100  px-4 m-4 relative shadow-md'> 
        
        <h2 className='text-2xl font-semibold bg-gradient-to-r from-blue-100  to-cyan-700 text-transparent bg-clip-text py-7 text-center'>Login</h2> <div className='opacity-50'><Image width={0} height={0} className='w-8 absolute top-5 right-3' src='/icon1.png' alt=""/></div>
        
            <div>
             <form onSubmit={submithandler} action="" className='flex flex-col items-center gap-4 '>
                
                {
                  err && (<h1 className="bg-red-500">{err}</h1>)
                }
                
                  
                
                <div className='w-full relative'>
                 <input onChange={(e)=>setEmail(e.target.value)}className='border-2 border-white  w-full rounded-full py-1 px-4 bg-transparent text-sm outline-none placeholder-cyan-700 text-cyan-700 text-opacity-90 placeholder-opacity-70' placeholder='EMail'  type="text" />
				 <FaUser className='absolute top-2 right-4 text-sm text-cyan-700 opacity-50 z-10'/>
                </div>

                <div className='w-full relative'>
                    <input onChange={(e)=>setPassword(e.target.value)} className='border-2 border-white  w-full rounded-full py-1 px-4 bg-transparent text-sm outline-none placeholder-cyan-700 text-cyan-700 text-opacity-90  placeholder-opacity-70'placeholder='Password'   type={(show === false)?'password' : 'text'} /> 
                    <FaLock className='absolute top-2 right-4 text-sm text-cyan-700 opacity-50 '/>
                </div>

                <div className='w-full relative text-xs text-center align-middle flex items-center gap-1 '>
                  <p className='text-cyan-700 ml-auto flex items-center gap-1 text-center mr-3 cursor-pointer'> 
                    {
                      (show === false ? <FaEyeSlash className='text-cyan-700 text-opacity-45' onClick={toggle}/> : <FaEye className='text-cyan-700 opacity-45 ' onClick={toggle}/>) 
                    }
                   <span className=' text-cyan-700 opacity-60'>Show password</span>
                  </p>
                </div>
                    
				<button className="glass rounded-full py-2 mt-1 px-3 shadow-md bg-sky-700  bg-opacity-50 hover:bg-opacity-70 hover:translate-y-px duration-300 text-white text-center font-semibold">Login Account</button>
        {<h1>{password}</h1>}
               </form>
               
				<div className='flex text-center items-center justify-center py-4 '>
					<span className='text-sm flex gap-1 bg-gradient-to-r from-sky-600  to-cyan-900 text-transparent bg-clip-text text-center'>Already have an account?<span className='text-md font-semibold bg-gradient-to-r from-blue-100  to-sky-600 text-transparent bg-clip-text cursor-pointer'><Link href="/register">Sign up</Link></span></span>
				</div>
               
            </div>  
        </div>
    </div>
  )
}

export default Login
