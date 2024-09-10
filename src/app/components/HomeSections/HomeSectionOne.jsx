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


const HomeSectionOne=()=>{

    return(
        <>
            <section className="pt-20 pl-40 bg-neutral-50  h-screen ">
                <div className="flex gap-5 w-fit">

                    {/* Personal Account Div */}
                    <div className="bg-white w-fit px-[1rem] py-[1rem] rounded-[8px]">
                        <div className="flex items-center  ">
                            <h1>Personal Account</h1>
                            <button className="ml-[8rem]">+ Add Card</button>
                        </div>

                        <div className="flex items-center">
                            <h1>$0.00</h1>
                            <p className="ml-auto"><VscEye /></p>
                        </div>

                        {/* modals */}
                        <div className="flex items-center justify-between gap-5">
                            {/* 1 */}
                            <div>
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="bg-neutral-100 text-xl py-3 px-3 rounded-full" onClick={()=>document.getElementById('my_modal_3').showModal()}><BsSend /></button>
                                <p>Send</p>
                                <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Transfer</h3>
                                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                </div>
                                </dialog>
                            </div>

                            {/* 2 */}
                            <div>
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="bg-neutral-100 text-xl py-3 px-3 rounded-full" onClick={()=>document.getElementById('my_modal_3').showModal()}><BsArrowDown /></button>
                                <p>Receive</p>
                                <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Transfer</h3>
                                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                </div>
                                </dialog>
                            </div>

                            {/* 3 */}
                            <div>
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="bg-neutral-100 text-xl py-3 px-3 rounded-full" onClick={()=>document.getElementById('my_modal_3').showModal()}><LuSwitchCamera /></button>
                                <p>Withdraw</p>
                                <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Transfer</h3>
                                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                </div>
                                </dialog>
                            </div>

                            {/* 4 */}
                            <div>
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="bg-neutral-100 text-xl py-3 px-3 rounded-full" onClick={()=>document.getElementById('my_modal_3').showModal()}><MdOutlineSpeakerNotes /></button>
                                <p>Pay Bill</p>
                                <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Transfer</h3>
                                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                </div>
                                </dialog>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <p>Last Updated: Just Now </p>
                            <p className="ml-auto"><LuRefreshCcw /></p>

                        </div>
                    </div>


                    {/* Card Div */}
                    <div className="bg-blue-400 text-white w-fit px-[1rem] py-[1rem] rounded-[8px]">
                        <div className="flex items-center">
                            <div className="flex items-center gap-1 border ">
                                <p><MdOutlineFlip /></p>
                                <p>Flip Card</p>
                            </div>
                            <div>logo</div>
                        </div>

                        <div>
                            <p>Balance</p>
                            <div className="flex items-center">
                                <p>$2,000,000.00</p>
                                <p><VscEye /></p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <p>1234 1234 1234 1234</p>
                            <p><VscEye /></p>
                        </div>

                        <div className="flex items-center">
                            <p>Louis Umukoro</p>
                            <div>
                                <p>Expires</p>
                                <p>07/26</p>
                            </div>

                            <p>VISA</p>
                        </div>
                    </div>
                </div>

                {/* Overview Div */}
                {/* <div>
                    <h1>Overview</h1>
                </div> */}
            </section>
        </>
    )




};

export default HomeSectionOne;