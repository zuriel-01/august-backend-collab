"use client";
import React from "react";
import { Sora } from "next/font/google";
import { BsPiggyBank } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { MdEmergency } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { CiCirclePlus } from "react-icons/ci";
import { LuTarget } from "react-icons/lu";
// import { PiArrowCircleUpRightThin } from "react-icons/pi";  <PiArrowCircleUpRightThin/> better arrow up
// const sora= Sora({

// })

export default function target() {
  return (
    <div className="h-[950px] bg-gray-100">
      <div className="flex justify-between ">
        <h1 className="text-3xl ml-4">All Goals</h1>
        <button className="bg-gray-100 mr-4 border border-gray-300 rounded-md text-gray-500 flex items-center mt-4 w-44 px-1">
          Search Goal
        </button>
      </div>
      <section className="grid grid-cols-3 gap-y-10 m-5">
        <div className="bg-white h-[264px] w-[400px] border border-gray-200 p-4 rounded">
          <div className="flex justify-start items-center">
            <div className="bg-cyan-100 h-11 w-11 rounded-md flex items-center justify-center">
              <BsPiggyBank className="text-2xl text-sky-400" />
            </div>
            <div className="flex items-center ">
              <h1 className="text-2xl pl-2">Savings</h1>
              <div className="ml-40">
                <div className="bg-gray-100 flex items-center justify-center rounded-full h-11 w-11">
                <GoArrowUpRight className="text-xl " />
              </div>
              </div>
            </div>
          </div>
          <h3 className="pt-8 text-3xl">$1,233,223.00</h3>
          <div className=" flex text-xs text-gray-500 pt-9 pb-4 tracking-wider">
            <h6>Target</h6>
            <h3 className="text-blue-400">$10,250,000.00</h3>
          </div>
          <div className="bg-gray-100 h-12 w-full rounded-md"></div>
        </div>

        <div className="bg-white h-[264px] w-[400px] border border-gray-200 p-4 rounded">
          <div className="flex justify-start items-center">
            <div className="bg-cyan-100 h-11 w-11 rounded-md flex items-center justify-center">
              <TbTargetArrow className="text-2xl text-sky-400" />
            </div>
            <div className="flex items-center ">
              <h1 className="text-2xl pl-2">Buy My Self A New House</h1>
              <div className="bg-gray-100 flex items-center justify-center rounded-full h-11 w-11">
                <GoArrowUpRight className="text-xl " />
            
              </div>
            </div>
          </div>
          <h3 className="pt-6 text-3xl">$152,000.00</h3>
          <div className=" flex text-xs text-gray-500 pt-6 pb-4 tracking-wider">
            <h6>Target</h6>
            <h3 className="text-blue-400">$200,000.00</h3>
          </div>
          <div className="bg-gray-100 h-12 w-full rounded-md"></div>
        </div>

        <div className="bg-white h-[264px] w-[400px] border border-gray-200 p-4 rounded">
          <div className="flex justify-start items-center">
            <div className="bg-cyan-100 h-11 w-11 rounded-md flex items-center justify-center">
              <MdEmergency className="text-2xl text-sky-400" />
            </div>
            <div className="flex items-center ">
              <h1 className="text-2xl pl-2 ">Emergency</h1>
              <div className="ml-32">
              <div className="bg-gray-100 flex items-center justify-center rounded-full h-11 w-11">
                <GoArrowUpRight className="text-xl justify-self-end" />
              </div>
              </div>
            </div>
          </div>
          <h3 className="pt-8 text-3xl">$33,350.00</h3>
          <div className=" flex text-xs text-gray-500 pt-9 pb-4 tracking-wider">
            <h6>Target</h6>
            <h3 className="text-blue-400">$100,000.00</h3>
          </div>

          <div className="bg-gray-100 h-12 w-full rounded-md"></div>
        </div>
        <div className="bg-white h-[264px] w-[400px] border border-gray-200 p-4 rounded">
          <div className="flex justify-start items-center">
            <div className="bg-cyan-100 h-11 w-11 rounded-md flex items-center justify-center">
              <BsPiggyBank className="text-2xl text-sky-400" />
            </div>
            <div className="flex items-center ">
              <h1 className="text-2xl pl-2">School</h1>
              <div className="ml-44">
              <div className="bg-gray-100 flex items-center justify-center rounded-full h-11 w-11">
                <GoArrowUpRight className="text-xl " />
              </div>
              </div>
            </div>
          </div>
          <h3 className="pt-8 text-3xl">$350.00</h3>
          <div className=" flex text-xs text-gray-500 pt-9 pb-4 tracking-wider">
            <h6>Target</h6>
            <h3 className="text-blue-400">$1,500.00</h3>
          </div>

          <div className="bg-gray-100 h-12 w-full rounded-md"></div>
        </div>
        <div className="bg-white h-[264px] w-[400px] border border-gray-200 p-4 rounded">
          <div className="flex justify-start items-center">
            <div className="bg-cyan-100 h-11 w-11 rounded-md flex items-center justify-center">
              <TbTargetArrow className="text-2xl text-sky-400" />
            </div>
            <div className="flex items-center ">
              <h1 className="text-2xl pl-2">Betting</h1>
              <div className="ml-44">
              <div className="bg-gray-100 flex items-center justify-center rounded-full h-11 w-11">
                <GoArrowUpRight className="text-xl " />
              </div>
              </div>
            </div>
          </div>
          <h3 className="pt-8 text-3xl">$200.00</h3>
          <div className=" flex text-xs text-gray-500 pt-9 pb-4 tracking-wider">
            <h6>Target</h6>
            <h3 className="text-blue-400">$500.00</h3>
          </div>

          <div className="bg-gray-100 h-12 w-full rounded-md"></div>
        </div>
        <div className="bg-white h-[264px] w-[400px] border border-gray-200 p-4 rounded">
          <div className="flex justify-start items-center">
            <div className="bg-cyan-100 h-11 w-11 rounded-md flex items-center justify-center">
              <TbTargetArrow className="text-2xl text-sky-400" />
            </div>
            <div className="flex items-center ">
              <h1 className="text-2xl pl-2 ">PS 5</h1>
              <div className="ml-52">
              <div className="bg-gray-100 flex items-center justify-center rounded-full h-11 w-11">
                <GoArrowUpRight className="text-xl " />
              </div>
              </div>
            </div>
          </div>
          <h3 className="pt-8 text-3xl">$0.00</h3>
          <div className=" flex text-xs text-gray-500 pt-9 pb-4 tracking-wider">
            <h6>Target</h6>
            <h3 className="text-blue-400">$500.00</h3>
          </div>
          <div className="bg-gray-100 h-12 w-full rounded-md"></div>
        </div>

        <div className="bg-white h-[264px] w-[400px] border border-gray-200 p-4 rounded">
          <div className="flex justify-start items-center">
            <div className="bg-cyan-100 h-11 w-11 rounded-md flex items-center justify-center">
              <TbTargetArrow className="text-2xl text-sky-400" />
            </div>
            <div className="flex items-center">
              <h1 className="text-2xl pl-2">Fan</h1>
              <div className="flex justify-end">
                <div className="ml-52">
                  <div className="bg-gray-100 flex justify-center items-center rounded-full h-11 w-11">
                    <GoArrowUpRight className=" text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="pt-8 text-3xl">$3.00</h3>
          <div className=" flex text-xs text-gray-500 pt-9 pb-4 tracking-wider">
            <h6>Target</h6>
            <h3 className="text-blue-400">$30.00</h3>
          </div>
          <div className="bg-gray-100 h-12 w-full rounded-md"></div>
        </div>

        <div className="bg-white h-[264px] w-[400px] border border-gray-200 p-4 rounded">
          <div className="flex justify-start items-center">
            <div className="bg-cyan-100 h-11 w-11 rounded-md flex items-center justify-center">
              <LuTarget className="text-2xl text-sky-400" />
            </div>
            <div className="flex items-center ">
              <h1 className="text-2xl pl-2">Add New Goal</h1>
            </div>
          </div>
          <h3 className="pt-7 pb-7 text-sm tracking-wide text-gray-500">
            Ready to take control of your financial future? Set clear targets
            for your savings, goals, and more with our streamlined banking
            tools. Start planning smarter today!
          </h3>

          <button className="bg-sky-400 h-9 w-36 gap-2 rounded-md justify-center items-center flex">
            <CiCirclePlus className="text-white text-3xl" />
            <h6 className=" text-white font-extralight">New Goal</h6>
          </button>
        </div>
      </section>
    </div>
  );
}
