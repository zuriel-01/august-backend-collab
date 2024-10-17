"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { VscEye } from "react-icons/vsc";
import { BsSend } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { LuSwitchCamera } from "react-icons/lu";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import { MdOutlineFlip } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
import { PiBankLight } from "react-icons/pi";
import { MdPhoneIphone } from "react-icons/md";
import { BiWifi } from "react-icons/bi";
import { TbBulb } from "react-icons/tb";
import { FaTv } from "react-icons/fa";
import { HiOutlineGiftTop } from "react-icons/hi2";
import { ImSpades } from "react-icons/im";

const HomeSectionOne = () => {
  const [showAccountBalance, setShowAccountBalance] = useState(true);
  const [showAccountBalance2, setShowAccountBalance2] = useState(true);
  const [showAccountBalance3, setShowAccountBalance3] = useState(true);

  const toggleShowAccountBalance = () => {
    setShowAccountBalance(!showAccountBalance);
    // setShowAccountBalance(false)
  };

  const toggleShowAccountBalance2 = () => {
    setShowAccountBalance2(!showAccountBalance2);
  };

  const toggleShowAccountBalance3 = () => {
    setShowAccountBalance3(!showAccountBalance3);
  };

  return (
    <>
      <section className="pt-[8rem]  ml-[0.5px] lg:pl-40  w-full bg-neutral-100 h-[70vh]   ">
        <div className="md:flex gap-5 w-fit">
          {/* Personal Account Div */}
          <div className="bg-white w-fit px-[1rem] py-[1rem] mt-5 rounded-[8px]">
            <div className="flex items-center  ">
              <h1 className="text-sm">Personal Account</h1>
              <button className="ml-[8rem] text-sm border border-black rounded-[5px] py-[3px] px-2">
                + Add Card
              </button>
            </div>

            <div className="flex items-center mt-5 font-bold">
              <div
                onClick={toggleShowAccountBalance}
                className="flex items-center cursor-pointer"
              >
                {showAccountBalance ? (
                  <>
                    <p className="font-bold text-2xl ">$0.00</p>
                    <p className="ml-10 text-xl ">
                      <VscEye />
                    </p>
                  </>
                ) : (
                  <div className="flex items-center">
                    <p className="font-bold text-2xl  opacity-10 text-black  ">
                      X.XX
                    </p>
                    <p className=" cursor-pointer ml-12 text-xl">
                      <RiEyeCloseLine />
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* modals */}
            <div className="flex items-center justify-between gap-5 mt-5">
              {/* 1 */}
              <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn border rounded-full text-xl bg-neutral-100"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  <BsSend />
                </button>
                <p className="text-center text-sm mt-3">Send</p>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <div>
                      <div>
                        <h1 className="font-medium text-2xl">Transfer</h1>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mt-3">
                          <h1 className="text-neutral-400 text-sm">
                            Select Beneficiaries
                          </h1>
                          <p className="text-sm text-sky-600">Sell All</p>
                        </div>

                        <ul className="flex items-center gap-3 mt-1 h-[4rem] w-full overflow-hidden  ">
                          <li>
                            <Image
                              src={p1}
                              width={0}
                              height={0}
                              alt="image"
                              className="w-16 h-[4rem] object-cover rounded-[12px]  "
                            />
                          </li>
                          <li>
                            <Image
                              src={p2}
                              width={0}
                              height={0}
                              alt="image"
                              className="w-16 h-full object-cover rounded-[12px]"
                            />
                          </li>
                          <li>
                            <Image
                              src={p3}
                              width={0}
                              height={0}
                              alt="image"
                              className="w-16 h-full object-cover rounded-[12px]"
                            />
                          </li>
                          <li>
                            <Image
                              src={p4}
                              width={0}
                              height={0}
                              alt="image"
                              className="w-16 h-[4rem] object-cover rounded-[12px]"
                            />
                          </li>
                          <li className="bg-sky-300 text-sky-600 w-16 h-[4rem]  items-center rounded-[12px] flex">
                            <span className="m-auto">B</span>
                          </li>
                          <li className="border border-solid w-16 h-[4rem] items-center rouned-[12px] flex">
                            <span className="m-auto text-2xl">+</span>
                          </li>
                        </ul>
                      </div>

                      <div className="flex flex-col">
                        <form className="mt-4" action="">
                          <div className="flex flex-col gap-1">
                            <label
                              className="text-sm text-neutral-400"
                              htmlFor=""
                            >
                              Bank Name
                            </label>
                            <input
                              type="text"
                              placeholder="Select Bank"
                              className="py-1 px-8 outline-none border border-neutral-400 rounded-[6px]"
                            />
                          </div>

                          <div className="mt-4 flex flex-col gap-1">
                            <label
                              className="text-sm text-neutral-400"
                              htmlFor=""
                            >
                              Account Number
                            </label>
                            <input
                              type="tel"
                              placeholder="Eg. 1234567890"
                              className="py-1 px-8 outline-none border border-neutral-400 rounded-[6px]"
                            />
                          </div>

                          <div className="mt-10 flex m-auto">
                            <button className="bg-sky-400 text-white px-16 py-2 w-full rounded-[8px]">
                              Continue
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
                  </div>
                </dialog>
              </div>

              {/* 2 */}
              <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn border rounded-full text-xl bg-neutral-100"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  <BsArrowDown />
                </button>
                <p className="text-center text-sm mt-3">Received</p>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <div>
                      <div>
                        <h1 className="font-medium text-2xl">Receive</h1>
                      </div>

                      <div className="flex items-center justify-between mt-6 bg-neutral-200 p-3 rounded-lg">
                        <div>
                          <p>Username</p>
                          <p className="text-black">@WaylonZieme</p>
                        </div>

                        <div className="flex items-center gap-1 text-sky-400 cursor-pointer">
                          <p>Copy</p>
                          <p>
                            <IoCopyOutline />
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between bg-neutral-200 p-3 rounded-lg">
                        <div>
                          <p>Account Name</p>
                          <p className="text-black">Waylon Zieme</p>
                        </div>

                        <div className="flex items-center gap-1 text-sky-400 cursor-pointer">
                          <p>Copy</p>
                          <p>
                            <IoCopyOutline />
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between bg-neutral-200 p-3 rounded-lg">
                        <div>
                          <p>Account Number</p>
                          <p className="text-black">65007834</p>
                        </div>

                        <div className="flex items-center gap-1 text-sky-400 cursor-pointer">
                          <p>Copy</p>
                          <p>
                            <IoCopyOutline />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
                  </div>
                </dialog>
              </div>

              {/* 3 */}
              <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn border rounded-full text-xl bg-neutral-100"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  <LuSwitchCamera />
                </button>
                <p className="text-center text-sm mt-3">Withdraw</p>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <div>
                      <div>
                        <h1 className="font-medium text-2xl">Withdraw</h1>
                      </div>
                      <div className="flex flex-col ">
                        <p className="m-auto text-sm text-neutral-400">
                          Avaliable
                        </p>
                        <p className="m-auto text-2xl font-semibold">
                          $20,000.00
                        </p>
                      </div>

                      <div className="mt-8">
                        <form className="flex flex-col gap-1" action="">
                          <label
                            className="text-sm text-neutral-600"
                            htmlFor=""
                          >
                            Enter Amount
                          </label>
                          <input
                            type="tel"
                            placeholder="$200"
                            className="py-2 border border-neutral-400 outline-none px-2 rounded-[8px]"
                          />
                        </form>
                      </div>

                      <div className="flex items-center justify-between mt-6 ">
                        <p className="flex items-center gap-1">
                          <span className="text-xl">
                            <LuSwitchCamera />
                          </span>
                          Withdraw To
                        </p>
                        <button className="border border-black p-2 rounded-[8px]">
                          Add Beneficiary{" "}
                        </button>
                      </div>

                      <div className="mt-6 border border-sky-600 px-5 py-2 rounded-[8px]">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <p className="bg-neutral-200 p-4 rounded-full">
                              <PiBankLight />
                            </p>
                            <div className="">
                              <p className="text-sm">Joy Akpobi</p>
                              <p className="text-sm">*** **** 1234</p>
                            </div>
                          </div>

                          <div>
                            <input type="checkbox" />
                          </div>
                        </div>
                      </div>

                      <div className="mt-10 flex m-auto">
                        <button className="bg-sky-400 text-white px-16 py-2 w-full rounded-[8px]">
                          Continue
                        </button>
                      </div>
                    </div>
                    {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
                  </div>
                </dialog>
              </div>

              {/* 4 */}
              <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn border rounded-full text-xl bg-neutral-100"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  <MdOutlineSpeakerNotes />
                </button>
                <p className="text-sm">Pay Bill</p>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <div>
                      <div>
                        <h1 className="text-2xl font-medium">Pay Bills</h1>
                        <div className="flex items-center justify-between  mt-6">
                          <div>
                            <h1 className="bg-yellow-500 p-5 w-fit rounded-[8px] text-4xl">
                              <MdPhoneIphone />
                            </h1>
                            <p className=" text-sm ml-3">Top-Up</p>
                          </div>

                          <div>
                            <h1 className="bg-sky-500 p-5 w-fit rounded-[8px] text-4xl">
                              <BiWifi />
                            </h1>
                            <p className=" text-sm ml-2">Internet</p>
                          </div>

                          <div>
                            <h1 className="bg-blue-700 p-5 w-fit rounded-[8px] text-4xl">
                              <TbBulb />
                            </h1>
                            <p className=" text-sm ml-1">Electricity</p>
                          </div>

                          <div>
                            <h1 className="bg-green-500 p-5 w-fit rounded-[8px] text-4xl">
                              <FaTv />
                            </h1>
                            <p className=" text-sm ml-6">TV</p>
                          </div>
                        </div>

                        <div className="mt-5 flex items-center gap-4">
                          <div>
                            <h1 className="bg-neutral-500 p-5 w-fit rounded-[8px] text-4xl">
                              <HiOutlineGiftTop />
                            </h1>
                            <p className=" text-sm ml-">Gift Cards</p>
                          </div>

                          <div>
                            <h1 className="bg-red-700 p-5 w-fit rounded-[8px] text-4xl">
                              <ImSpades />
                            </h1>
                            <p className=" text-sm ml-3">Betting</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
                  </div>
                </dialog>
              </div>
            </div>

            <div className="flex items-center mt-5 text-neutral-400">
              <p className="text-sm">Last Updated: Just Now </p>
              <p className="ml-auto">
                <LuRefreshCcw />
              </p>
            </div>
          </div>

          {/* Card Div */}
          <div className=" mt-5 bg-gradient-to-r from-cyan-500 to-cyan-900 text-white w-fit px-[1rem] py-[1rem] rounded-[8px]">
            <div className="flex items-center">
              <div className="flex items-center gap-1 border font-semibold border-white rounded-[5px] py-[3px] px-2 ">
                <p className="">
                  <MdOutlineFlip />
                </p>
                <p className="text-sm">Flip Card</p>
              </div>
              <div className="ml-[12rem] font-extrabold text-lg">Co-Bank</div>
            </div>

            <div className="mt-5">
              <p className="text-sm font-semibold">Balance</p>
              <div
                onClick={toggleShowAccountBalance2}
                className="flex items-center cursor-pointer"
              >
                {showAccountBalance2 ? (
                  <>
                    <p className="font-bold text-2xl ">$2,000,000.00</p>
                    <p className="ml-10 text-xl ">
                      <VscEye />
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-bold text-2xl bg-opacity-100  blurry-text ">
                      $0,000,00000.00
                    </p>
                    <p className=" cursor-pointer ml-10 text-xl">
                      <RiEyeCloseLine />
                    </p>
                  </>
                )}
              </div>
            </div>

            <div
              onClick={toggleShowAccountBalance3}
              className="flex items-center mt-5 cursor-pointer"
            >
              {showAccountBalance3 ? (
                <>
                  <p className="font-bold ">1234 1234 1234 1234</p>
                  <p className="ml-auto text-xl">
                    <VscEye />
                  </p>
                </>
              ) : (
                <>
                  <p className="font-bold bg-opacity-100  blurry-text text-base">
                    0000 0000 0000{" "}
                  </p>
                  <p className=" cursor-pointer ml-auto text-xl">
                    <RiEyeCloseLine />
                  </p>
                </>
              )}
            </div>

            <div className="flex items-center justify-between mt-5">
              <p className="font-bold">Louis Umukoro</p>
              <div>
                <p className="text-sm">Expires</p>
                <p className="font-bold">07/26</p>
              </div>

              <p className="text-xl font-bold flex items-center ">VISA</p>
            </div>
          </div>
        </div>

        {/* Overview Div */}
        {/* <div>
                    <h1>Overview</h1>
                </div> */}
      </section>
    </>
  );
};

export default HomeSectionOne;
