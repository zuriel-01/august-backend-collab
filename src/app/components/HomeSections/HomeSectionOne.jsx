'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { VscEye } from "react-icons/vsc";
import { BsSend } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { LuSwitchCamera } from "react-icons/lu";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import { MdOutlineFlip } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { GrVisa } from "react-icons/gr";
import BarChart from "./BarChart";

<BsSend/>




const HomeSectionOne=()=>{

    const [showAccountBalance, setShowAccountBalance]=useState(true);
    const [showAccountBalance2, setShowAccountBalance2]=useState(true);
    const [showAccountBalance3, setShowAccountBalance3]=useState(true);

    const toggleShowAccountBalance=()=>{
        setShowAccountBalance(!showAccountBalance)
        // setShowAccountBalance(false)
    }

    const toggleShowAccountBalance2=()=>{
        setShowAccountBalance2(!showAccountBalance2)
    }

    const toggleShowAccountBalance3=()=>{
        setShowAccountBalance3(!showAccountBalance3)
    }



    return(
        <>
            <section className="pt-5 px-[1rem] lg:pl-40 bg-neutral-50 w-full   ">
                <div className="md:flex gap-5 w-fit">

                    {/* Personal Account Div */}
                    <div className="bg-white w-fit px-[1rem] py-[1rem] mt-5 rounded-[8px]">
                        <div className="flex items-center  ">
                            <h1 className="text-sm">Personal Account</h1>
                            <button className="ml-[8rem] text-sm border border-black rounded-[5px] py-[3px] px-2">+ Add Card</button>
                        </div>

                        <div className="flex items-center mt-5 font-bold">
                            <h1 className="text-xl">$0.00</h1>
        
                            <div onClick={toggleShowAccountBalance} className="flex items-center ml-auto">
                                <p className="ml-auto cursor-pointer text-black text-xl"><VscEye /></p>
                                <p className="ml-auto cursor-pointer text-black text-xl"><RiEyeCloseLine /></p> 
                            </div>
                        </div>

                        {/* modals */}
                        <div className="flex items-center justify-between gap-5 mt-5">
                            {/* 1 */}
                            <div>
                                <button className="btn rounded-full  text-xl bg-neutral-100" onClick={()=>document.getElementById('my_modal_01').showModal()}><BsSend/></button>
                                <p className="text-center">Send</p>
                                <dialog id="my_modal_01" className="modal">
                                <div className="modal-box">

                                <div className="mask mask-circle h-[150px] w-[150px]">
                                <img      src="/katie-transaction.webp"
                                alt="Recipient Profile Image" />
                                </div>                      
                                <p className="py-4">Recipient: Black Beauty</p>
                                <p className="py-4">Date: Feb 24, 2024</p>
                                <p className="py-4">Amount: $2000</p>
                                <p className="py-4">Time: 23:24 GMT</p>
                                <p className="py-4">Status: Successful</p>
                                {/* <p className="py-4">Txnhash: {txnHash1}</p> */}
                                <div className="modal-action">
                                <form method="dialog">
                        
                                <button className="btn botder border-black bg-red-200">Exit</button>
                                </form>
                                </div>
                                </div>
                                </dialog>
                            </div>

                            
                            {/* 2 */}
                            <div>
                                <button className="btn border rounded-full text-xl bg-neutral-100" onClick={()=>document.getElementById('my_modal_02').showModal()}><BsArrowDown/></button>
                                <p>Receive</p>
                                <dialog id="my_modal_02" className="modal">
                                <div className="modal-box">

                                <div className="mask mask-circle h-[150px] w-[150px]">
                                <div className='bg-blue-500 py-20 px-6 text-center text-3xl'>K</div>
                                </div>                      
                                <p className="py-4">Recipient: Kate Bishop</p>
                                <p className="py-4">Date: Feb 23, 2024</p>
                                <p className="py-4">Amount: $2500</p>
                                <p className="py-4">Time: 12:22 GMT</p>
                                <p className="py-4">Status: Pending</p>
                                {/* <p className="py-4">Txnhash: {txnHash2}</p> */}
                                <div className="modal-action">
                                <form method="dialog">
                        
                                <button className="btn botder border-black bg-red-200">Exit</button>
                                </form>
                                </div>
                                </div>
                                </dialog>
                            </div>



                            

                            {/* 3 */}
                            <div>
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="bg-neutral-100 text-xl py-3 px-3 rounded-full" onClick={()=>document.getElementById('my_modal_3').showModal()}><LuSwitchCamera /></button>
                                <p className="text-sm">Withdraw</p>
                                <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Withdraw</h3>
                                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                </div>
                                </dialog>
                            </div>

                            {/* 4 */}
                            <div>
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="bg-neutral-100 text-xl py-3 px-3 rounded-full" onClick={()=>document.getElementById('my_modal_3').showModal()}><MdOutlineSpeakerNotes /></button>
                                <p className="text-sm">Pay Bill</p>
                                <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg"></h3>
                                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                </div>
                                </dialog>
                            </div>
                        </div>

                        <div className="flex items-center mt-5 text-neutral-400">
                            <p className="text-sm">Last Updated: Just Now </p>
                            <p className="ml-auto"><LuRefreshCcw /></p>

                        </div>
                    </div>


                    {/* Card Div */}
                    <div className=" mt-5 bg-gradient-to-r from-cyan-500 to-cyan-900 text-white w-fit px-[1rem] py-[1rem] rounded-[8px]">
                        <div className="flex items-center">
                            <div className="flex items-center gap-1 border font-semibold border-white rounded-[5px] py-[3px] px-2 ">
                                <p className=""><MdOutlineFlip /></p>
                                <p className="text-sm">Flip Card</p>
                            </div>
                            <div className="ml-[12rem] font-extrabold text-lg">Co-Bank</div>
                        </div>

                        <div className="mt-5">
                            <p className="text-sm font-semibold">Balance</p>
                            <div onClick={toggleShowAccountBalance2} className="flex items-center cursor-pointer">

                                {showAccountBalance2 ? (
                                
                                <>
                                    <p className="font-bold text-2xl ">$2,000,000.00</p>
                                    <p className="ml-10 text-xl "><VscEye /></p>
                                </>)

                                : (

                                <>
                                    <p className="font-bold text-2xl bg-opacity-100  blurry-text ">$0,000,00000.00</p>
                                    <p className=" cursor-pointer ml-10 text-xl"><RiEyeCloseLine /></p>
                                </>)}
                                
                                
                            </div>
                        </div>

                        <div onClick={toggleShowAccountBalance3} className="flex items-center mt-5 cursor-pointer">

                            {showAccountBalance3 ? (
                                <>
                                    <p className="font-bold ">1234 1234 1234 1234</p>
                                    <p className="ml-auto text-xl"><VscEye /></p>
                                </> )

                                : (
                                    <>
                                        <p className="font-bold bg-opacity-100  blurry-text text-base">0000 0000 0000 </p>
                                        <p className=" cursor-pointer ml-auto text-xl"><RiEyeCloseLine /></p>
                                    </>)}

                        </div>

                        <div className="flex items-center justify-between mt-5">
                            <p className="font-bold">Louis Umukoro</p>
                            <div>
                                <p className="text-sm">Expires</p>
                                <p className="font-bold">07/26</p>
                            </div>

                            <p className="text-xl font-bold flex items-center "><GrVisa />ISA</p>
                        </div>
                    </div>
                </div>

                {/* Overview Div */}
                {/* <div>
                    <h1>Overview</h1>
                </div> */}
            </section>
            <BarChart/>
        </>
    )




};

export default HomeSectionOne;