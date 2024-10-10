'use client'
import React, { useEffect, useState } from 'react'

import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Register from './Register';
import axios from 'axios';
import { useRouter } from 'next/navigation';



const Otp = () => {
    const router = useRouter()
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [email, setEmail] = useState('')
    const [err, setErr] = useState('')
    const [resend, setResend] = useState(false)


    // a function to  handle when the user types the otp
    const handleChange = (e, index) => {

        if (isNaN(e.target.value)) return false

        setOtp([
            ...otp.map((data, indx) => (indx === index ? e.target.value : data))
        ]);

        console.log("this is otp", otp)

        if (e.target.value && e.target.nextSibling) {
            e.target.nextSibling.focus()
        }
    }

    // a function to handle when the user paste the otp
    const handlePaste = (e) => {

        const value = e.clipboardData.getData('text');

        console.log("thsi is the value of value", value.length)
        if (isNaN(value) || value.length < 4) return false

        const updatedValue = value.toString().split("").slice(0, otp.length)
        otp.length < 4 ? value == "" : setOtp(updatedValue).join('')

        console.log("this is the otp", otp)
        const focusedInput = e.target.parentNode.querySelector("input:focus")
        if (focusedInput) {
            focusedInput.blur()
        }


        // const lastInput = e.target.parentNode.querySelector('input[type="text"]:last-child')
        // if(lastInput){
        //     lastInput.focus()
        // }
    }

    const handleBackspace = (element, index) => {
        // clear current input field
        // move focus to the previous input
        // update parent Component

        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);

        if (index > 0) {
            element.previousSibling.focus();
        }
        onChangeOtp(newOtp.join(""));
    }

    // send request to api if otp length length is 4
    const handleOtpVerify = async (e) => {
        // remeber: our otp comes in an array format,
        // we have to convert to a string
        // 
        let userOtp = otp.join('')
        e.preventDefault() // prevents form default submission
        try {

            // const res = axios.post('http://localhost:3000/api/verify', {
            //     userOtp, email
            // })

            const res = await fetch('http://localhost:3000/api/verify', {
                method: "POST",
                headers: {

                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userOtp, email })

            })

            console.log(res)
            if (res.status === 404) {
                setErr('user not found')
            }
            else if (res.status == 401) {
                setErr("otp expired")
            }
            else if (res.status == 400) {
                setErr("otp incorrect")
            }
            else if (res.status == 200) {
                // route to the login page
                router.replace('/login')
            }
        }
        catch (e) {
            console.log(e.message)
        }
    }


    // function to resent otp
    function resendOtp(){
        // hint 1-> call the funtion only when the user otp is expired
        // hint 2 make an api call to endpoint(api/resendOtp)
        // n:b-> you will have to create the new endpoint
        
        // hint-3: you need to send the user email as a payload
        // hint-4 in your api, you need to generate a new otp (you can refrence the otp function in our api/register/route.js)
        // hint-5 You have to update the otp field in the user database with the new generated otp
        // hint-6 you have to also update the otpExpires value in the database to the current time + 5 mins (Date.now()+312500)
        // hint-7  any issue let's discuss in teh group
    }

    return (

        <form action="" onSubmit={handleOtpVerify}>
            {
                err &&
                (<h2 className="bg-red-500 text-white rounded-md px text-center"> {err} </h2>)
            }
            <div className='w-full h-[100vh] flex flex-col justify-center items-center bg'>

                <div className='h-[280px] flex flex-col items-center  justify-center w-fit bg-blue-300 bg-opacity-5 rounded-md backdrop-blur-xl bg-transparent shadow-sky-200 shadow-xl   px-4 m-4 relative'>
                    <h2 className='text-2xl font-semibold bg-gradient-to-r from-cyan-500 via-cyan-500 to-cyan-600 text-transparent inline-block bg-clip-text text-center'>OTP Verification</h2>
                    <p className='text-sm bg-gradient-to-r from-sky-600  to-cyan-900 inline-block text-transparent bg-clip-text text-center '>Your otp code has been sent to <span>*</span></p>
                    <div className=' flex  justify-center w-72 bg-blue-400 bg-opacity-5 rounded-md backdrop-blur-xl bg-transparent shadow-cyan-100  px-4 m-4 relative shadow-md'>

                        <div className='flex gap-3 '>
                            {
                                otp.map((data, i) => {
                                    return <input required className='w-16 h-16 rounded-lg outline-none px-3 text-3xl font-bold focus:text-cyan-600 text-cyan-600 text-center bg-opacity-20 bg-glass '

                                        type="text"
                                        value={data}
                                        maxLength={1}
                                        onChange={(e) => handleChange(e, i)}


                                        onPaste={(e) => handlePaste(e)}
                                    />;

                                })
                            }
                        </div>


                    </div>
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" type="text" className="w-max px-3 py-2 rounded-md mb-3" />

                    <div className='flex items-center pb-4'>
                        <center><button className='flex items-center glass rounded-lg w-[295px] py-2 mt-1 px-9 shadow-md  bg-sky-700  bg-opacity-50 hover:bg-opacity-70 hover:translate-y-px duration-300 text-white text-center font-semibold'>Verify <IoIosArrowForward className='ml-auto text-md font-semibold' /></button></center>
                    </div>
                    <p className='text-sm flex gap-2 bg-gradient-to-r from-sky-600  to-cyan-900 text-transparent bg-clip-text text-center'>Didn't recieve code? <a className='text-md font-lg bg-gradient-to-r from-blue-100  to-sky-600 text-transparent bg-clip-text cursor-pointer' href="">Request again</a></p>
                </div>
            </div>
        </form>
    );
}




export default Otp