"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../components/images/clear.png";
import img1 from "../components/images/hrt2.png";
import { MdOutlineDashboard } from "react-icons/md";
import { PiCards } from "react-icons/pi";
import { TbTransactionDollar } from "react-icons/tb";
import { PiInvoiceDuotone } from "react-icons/pi";
import { LuGoal } from "react-icons/lu";
import { BiUser } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { GoSun } from "react-icons/go";
import { BsMoonStars } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import { LiaSearchSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const [smallSide, setSmallSide] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  const [searchIcon, setSearchIcon] = useState(true);
  const [cardsIcon, setCardsIcon] = useState(false);
  const [transactionsIcon, setTransactionsIcon] = useState(false);
  const [invoiceIcon, setInvoiceIcon] = useState(false);
  const [goalsIcon, setGoalsIcon] = useState(false);
  const [accountIcon, setAccountIcon] = useState(false);
  const [supportIcon, setSupportIcon] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const toggleLight = () => {
    setIsLight(true);
    setIsDark(false);
  };

  const toggleDark = () => {
    setIsDark(true);
    setIsLight(false);
  };

  const toggleIcon = (icon) => {
    setSearchIcon(icon === "search");
    setCardsIcon(icon === "cards");
    setTransactionsIcon(icon === "transactions");
    setInvoiceIcon(icon === "invoice");
    setGoalsIcon(icon === "goals");
    setAccountIcon(icon === "account");
    setSupportIcon(icon === "support");
  };

  const toggleSmall = () => {
    setSmallSide(!smallSide);
  };

  const toggleIsDrop = () => {
    setIsDrop(!isDrop);
  };

  // sign out 
  async function signout(){
    await signOut()
  }
  return (
    <div className="relative">
      {!smallSide ? (
        <aside className="fixed top-0 left-0 h-full w-24 bg-white shadow-lg shadow-sky-100 z-50 pb-8">
          <div className="flex flex-col items-center gap-6 p-5">
            <p
              onClick={toggleSmall}
              className="cursor-pointer hover:text-sky-600 absolute right-[-11px] top-[3rem]"
            >
              <IoIosArrowDropright className="text-3xl" />
            </p>
            <div>
              <Image
                className="w-12"
                src={logo}
                width={0}
                height={0}
                alt="logo"
              />
            </div>
            <ul className="flex flex-col gap-2">
              <li
                onClick={() => toggleIcon("search")}
                className={`border-r-4 border-r-transparent hover:bg-sky-300 hover:text-sky-200 hover:border-r-blue-700 hover:border-r-4 ${
                  searchIcon ? "text-sky-400 bg-sky-200" : "bg-white"
                } rounded-md text-black cursor-pointer p-2`}
              >
                <MdOutlineDashboard className="text-2xl" />
              </li>
              <li
                onClick={() => toggleIcon("cards")}
                className={`border-r-4 border-r-transparent hover:bg-sky-300 hover:text-sky-200 hover:border-r-blue-700 hover:border-r-4 cursor-pointer ${
                  cardsIcon ? "text-sky-400 bg-sky-200" : "bg-white"
                }  rounded-md text-black cursor-pointer p-2`}
              >
                <PiCards className="text-2xl" />
              </li>
              <li
                onClick={() => toggleIcon("transactions")}
                className={`border-r-4 border-r-transparent hover:bg-sky-300 hover:text-sky-200 hover:border-r-blue-700 hover:border-r-4 cursor-pointer ${
                  transactionsIcon ? "text-sky-400 bg-sky-200" : "bg-white"
                }  rounded-md text-black cursor-pointer p-2`}
              >
                <TbTransactionDollar className="text-2xl" />
              </li>
              <li
                onClick={() => toggleIcon("invoice")}
                className={`border-r-4 border-r-transparent hover:bg-sky-300 hover:text-sky-200 hover:border-r-blue-700 hover:border-r-4 cursor-pointer ${
                  invoiceIcon ? "text-sky-400 bg-sky-200" : "bg-white"
                }  rounded-md text-black cursor-pointer p-2`}
              >
                <PiInvoiceDuotone className="text-2xl" />
              </li>
              <li
                onClick={() => toggleIcon("goals")}
                className={`border-r-4 border-r-transparent hover:bg-sky-300 hover:text-sky-200 hover:border-r-blue-700 hover:border-r-4 cursor-pointer ${
                  goalsIcon ? "text-sky-400 bg-sky-200" : "bg-white"
                }  rounded-md text-black cursor-pointer p-2`}
              >
                <LuGoal className="text-2xl" />
              </li>
              <li
                onClick={() => toggleIcon("account")}
                className={`border-r-4 border-r-transparent hover:bg-sky-300 hover:text-sky-200 hover:border-r-blue-700 hover:border-r-4 cursor-pointer ${
                  accountIcon ? "text-sky-400 bg-sky-200" : "bg-white"
                }  rounded-md text-black cursor-pointer p-2`}
              >
                <BiUser className="text-2xl" />
              </li>
            </ul>

            {/* <div className="flex flex-col gap-1 border border-sky-400 rounded-full w-max">
            <p
              onClick={toggleLight}
              className={`rounded-full text-black ${isLight ? 'bg-sky-800 text-white' : 'bg-white text-black'} cursor-pointer px-2 py-2`}
            >
              <GoSun className="text-3xl" />
            </p>
            <p
              onClick={toggleDark}
              className={`rounded-full text-black ${isDark ? 'bg-sky-800 text-white' : 'bg-white text-black'} cursor-pointer px-2 py-2`}
            >
              <BsMoonStars className="text-3xl" />
            </p>
          </div> */}

            <div className="flex flex-col gap-2 border border-sky-400 rounded-full w-max">
              <p
                onClick={toggleLight}
                className={`relative rounded-full text-black overflow-hidden cursor-pointer px-2 py-2 transform transition-all duration-500 ease-in-out 
      ${
        isLight
          ? "bg-gradient-to-r from-yellow-500 to-sky-800 text-yellow-400"
          : "bg-gradient-to-r from-sky-400 to-white text-yellow-400"
      }
      hover:scale-105`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-sky-500 to-sky-800 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></span>
                <GoSun className="relative text-2xl" />
              </p>

              <p
                onClick={toggleDark}
                className={`relative rounded-full text-black overflow-hidden cursor-pointer px-2 py-2 transform transition-all duration-500 ease-in-out 
      ${
        isDark
          ? "bg-gradient-to-r from-black to-sky-800 text-black"
          : "bg-gradient-to-r from-sky-400 to-white text-black"
      }
      hover:scale-105`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-black via-sky-500 to-sky-800 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></span>
                <BsMoonStars className="relative text-2xl" />
              </p>
            </div>

            <p
              onClick={() => toggleIcon("support")}
              className={`border-r-4 border-r-transparent hover:bg-sky-300 hover:text-sky-200 hover:border-r-blue-700 hover:border-r-4 cursor-pointer ${
                supportIcon ? "text-sky-400 bg-sky-200" : "bg-white"
              }  rounded-md text-black cursor-pointer p-2`}
            >
              <BiSupport className="text-3xl" />
            </p>
          </div>
        </aside>
      ) : (
        <aside className="fixed top-0 left-0 h-full w-48 bg-white shadow-lg shadow-sky-100 z-50">
          <div className="flex flex-col items-center justify-between gap-8 p-5 ">
            <p
              onClick={toggleSmall}
              className="hover:text-sky-600 cursor-pointer absolute right-[-8px] top-[3rem]"
            >
              <IoIosArrowDropleft className="text-3xl" />
            </p>
            <div className="flex items-center gap-1">
              <Image
                className="w-12"
                src={logo}
                width={0}
                height={0}
                alt="logo"
              />
              <span className="text-xl">Co-Bank</span>
            </div>
            <ul className="flex flex-col gap-4">
              <li
                onClick={() => toggleIcon("search")}
                className={`border-r-4 border-r-transparent hover:bg-sky-300 hover:text-sky-200 hover:border-r-blue-700 hover:border-r-4 flex items-center gap-5 text-lg ${
                  searchIcon
                    ? "text-black bg-sky-200"
                    : "text-gray-700 bg-white"
                } rounded-md text cursor-pointer p-1`}
              >
                <MdOutlineDashboard
                  className={`text-2xl ${
                    searchIcon ? "text-sky-400" : "text-gray-700"
                  }`}
                />
                Dashboard
              </li>
              <li
                onClick={() => toggleIcon("cards")}
                className={`border-r-4 border-r-transparent hover:bg-sky-300 hover:text-sky-200 hover:border-r-blue-700 hover:border-r-4 flex items-center gap-5 text-lg ${
                  cardsIcon ? "text-black bg-sky-200" : "text-gray-700 bg-white"
                } rounded-md text cursor-pointer p-1`}
              >
                <PiCards
                  className={`text-3xl ${
                    cardsIcon ? "text-sky-400" : "text-gray-700"
                  }`}
                />
                Cards
              </li>
              <li
                onClick={() => toggleIcon("transactions")}
                className={`border-r-4 border-r-transparent hover:bg-sky-300 hover:text-sky-200 hover:border-r-blue-700 hover:border-r-4 flex items-center gap-5 text-lg ${
                  transactionsIcon
                    ? "text-black bg-sky-200"
                    : "text-gray-700 bg-white"
                } rounded-md text cursor-pointer p-1`}
              >
                <TbTransactionDollar
                  className={`text-2xl ${
                    transactionsIcon ? "text-sky-400" : "text-gray-700"
                  }`}
                />
                Transactions
              </li>
              <li
                onClick={() => toggleIcon("invoice")}
                className={`border-r-4 border-r-transparent hover:bg-sky-300 hover:text-sky-200 hover:border-r-blue-700 hover:border-r-4 flex items-center gap-5 text-lg ${
                  invoiceIcon
                    ? "text-black bg-sky-200"
                    : "text-gray-700 bg-white"
                } rounded-md text cursor-pointer p-1`}
              >
                <PiInvoiceDuotone
                  className={`text-2xl ${
                    invoiceIcon ? "text-sky-400" : "text-gray-700"
                  }`}
                />
                Invoice
              </li>
              <li
                onClick={() => toggleIcon("goals")}
                className={`border-r-4 border-r-transparent hover:bg-sky-300 hover:text-sky-200 hover:border-r-blue-700 hover:border-r-4 flex items-center gap-5 text-lg ${
                  goalsIcon ? "text-black bg-sky-200" : "text-gray-700 bg-white"
                } rounded-md text cursor-pointer p-1`}
              >
                <LuGoal
                  className={`text-2xl ${
                    goalsIcon ? "text-sky-400" : "text-gray-700"
                  }`}
                />
                Goals
              </li>
              <li
                onClick={() => toggleIcon("account")}
                className={`border-r-4 border-r-transparent hover:bg-sky-300 hover:text-sky-200 hover:border-r-blue-700 hover:border-r-4 flex items-center gap-5 text-lg ${
                  accountIcon
                    ? "text-black bg-sky-200"
                    : "text-gray-700 bg-white"
                } rounded-md text cursor-pointer p-1`}
              >
                <BiUser
                  className={`text-2xl ${
                    accountIcon ? "text-sky-400" : "text-gray-700"
                  }`}
                />
                Account
              </li>
            </ul>

            {/* <div className="flex gap-1 border border-sky-400 rounded-full w-max">
              <p
                onClick={toggleLight}
                className={`rounded-full text-black ${
                  isLight ? "bg-sky-800 text-white" : "bg-white text-black"
                } cursor-pointer px-2 py-2`}
              >
                <GoSun className="text-3xl" />
              </p>
              <p
                onClick={toggleDark}
                className={`rounded-full text-black ${
                  isDark ? "bg-sky-800 text-white" : "bg-white text-black"
                } cursor-pointer px-2 py-2`}
              >
                <BsMoonStars className="text-3xl" />
              </p>
            </div> */}
            {/* this is for the theme toggle icons */}
            <div className="flex gap-2 border border-sky-400 rounded-full w-max">
              <p
                onClick={toggleLight}
                className={`relative rounded-full text-black overflow-hidden cursor-pointer px-2 py-2 transform transition-all duration-500 ease-in-out 
      ${
        isLight
          ? "bg-gradient-to-r from-yellow-500 to-sky-800 text-yellow-400"
          : "bg-gradient-to-r from-sky-400 to-white text-yellow-500"
      }
      hover:scale-105`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-sky-500 to-sky-800 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></span>
                <GoSun className="relative text-2xl" />
              </p>

              <p
                onClick={toggleDark}
                className={`relative rounded-full text-black overflow-hidden cursor-pointer px-2 py-2 transform transition-all duration-500 ease-in-out 
      ${
        isDark
          ? "bg-gradient-to-r from-black to-sky-800 text-black"
          : "bg-gradient-to-r from-sky-400 to-white text-black"
      }
      hover:scale-105`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-black via-sky-500 to-sky-800 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></span>
                <BsMoonStars className="relative text-2xl" />
              </p>
            </div>

            <p
              onClick={() => toggleIcon("support")}
              className={`border-r-4 border-r-transparent hover:bg-sky-300 hover:text-sky-200 hover:border-r-blue-700 hover:border-r-4 cursor-pointer ${
                supportIcon ? "text-sky-400 bg-sky-200" : "bg-white"
              }  rounded-md text-black cursor-pointer p-2`}
            >
              <BiSupport className="text-3xl" />
            </p>
          </div>
        </aside>
      )}

      {!smallSide && (
        <nav className="fixed top-0 left-20 w-[calc(100%-5rem)] py-5 pl-[2rem] pr-[3rem] bg-white shadow-lg shadow-sky-100 z-40">
          <div className="flex items-center justify-between gap-10 ">
            <p className="text-2xl font-bold text-stone-900">Dashboard</p>
            <form className="relative flex items-center gap-1">
              <input
                type="text"
                className="border border-gray-400 w-full py-2 px-10 rounded-md text-xl text-gray-400 font-semibold"
                placeholder="search"
              />
              <button
                type="submit"
                className="text-sm bg-slate-600 text-white rounded px-1 py-2 italic hover:bg-sky-400 hover:text-black hover:font-semibold shadow-lg"
              >
                Send
              </button>
              <LiaSearchSolid className="text-gray-400 text-2xl absolute top-1/2 left-3 transform -translate-y-1/2" />
            </form>

            <div className="flex items-center gap-6">
              <p>
                <VscBellDot className="text-3xl" />
              </p>
              <div
                onClick={toggleIsDrop}
                className="rounded-full w-12 h-12 cursor-pointer shadow-lg shadow-sky-200 relative"
              >
                <Image
                  className="w-12 rounded-full"
                  src={img1}
                  width={0}
                  height={0}
                  alt="image"
                />
              </div>
            </div>
          </div>
          {isDrop && (
            <ul className="bounce-in-top right-10 top-[6rem] bg-slate-100 rounded-md shadow-lg shadow-sky-100 absolute px-6 py-1 flex flex-col gap-2">
              <li className="flex items-center gap-3 hover:bg-sky-200 cursor-pointer p-2 hover:rounded-md">
                <BiUser className="text-2xl" /> My Profile
              </li>
              <li className="flex items-center gap-3 hover:bg-sky-200 cursor-pointer p-2 hover:rounded-md">
                <IoSettingsOutline className="text-2xl" /> Settings
              </li>
              <li className="flex items-center gap-3 hover:bg-sky-200 cursor-pointer p-2 hover:rounded-md">
                <BiSupport className="text-2xl" /> Support
              </li>
              
              <li onClick={signout} className="flex items-center gap-3 hover:bg-sky-200 cursor-pointer p-2 hover:rounded-md">
                <RiLogoutBoxRLine className="text-2xl" /> Logout
              </li>
            </ul>
          )}
        </nav>
      )}

      {smallSide && (
        <nav className="slide-right fixed top-0 left-20 w-[calc(100%-10rem)] pl-[1rem] pr-[3rem] py-5 bg-white shadow-lg shadow-sky-100 z-40">
          <div className="flex items-center justify-between gap-10">
            <p className="text-2xl font-bold text-stone-900">Dashboard</p>
            <form className="relative flex items-center gap-1">
              <input
                type="text"
                className="border border-gray-400 w-full py-2 px-10 rounded-md text-xl text-gray-400 font-semibold"
                placeholder="search"
              />
              <button
                type="submit"
                className="text-sm bg-slate-600 text-white rounded px-1 py-2 italic hover:bg-sky-400 hover:text-black hover:font-semibold shadow-lg"
              >
                Send
              </button>
              <LiaSearchSolid className="text-gray-400 text-2xl absolute top-1/2 left-3 transform -translate-y-1/2" />
            </form>

            <div className="flex items-center gap-6">
              <p>
                <VscBellDot className="text-3xl" />
              </p>
              <div
                onClick={toggleIsDrop}
                className="rounded-full w-12 h-12 cursor-pointer shadow-lg shadow-sky-200 relative"
              >
                <Image
                  className="w-12 rounded-full"
                  src={img1}
                  width={0}
                  height={0}
                  alt="image"
                />
              </div>
            </div>
          </div>
          {isDrop && (
            <ul className="bounce-in-top right-10 top-[6rem] bg-slate-100 rounded-md shadow-lg shadow-sky-100 absolute px-6 py-1 flex flex-col gap-2">
              <li className="flex items-center gap-3 hover:bg-sky-200 cursor-pointer p-2 hover:rounded-md">
                <BiUser className="text-2xl" /> My Profile
              </li>
              <li className="flex items-center gap-3 hover:bg-sky-200 cursor-pointer p-2 hover:rounded-md">
                <IoSettingsOutline className="text-2xl" /> Settings
              </li>
              <li className="flex items-center gap-3 hover:bg-sky-200 cursor-pointer p-2 hover:rounded-md">
                <FcOnlineSupport className="text-2xl" /> Support
              </li>
              <li className="flex items-center gap-3 hover:bg-sky-200 cursor-pointer p-2 hover:rounded-md">
                <RiLogoutBoxRLine className="text-2xl" /> Logout
              </li>
            </ul>
          )}
        </nav>
      )}
    </div>
  );
};

export default Navbar;

// To ensure that both the sidebar and the navbar remain fixed without overflowing their boundaries, and to ensure they maintain specific widths,
