'use client'


import Navbar from "./components/Navbar";
import HomeSectionOne from "./components/HomeSections/HomeSectionOne";
import Transaction from "./components/Transaction";
import BarChart from "./components/HomeSections/BarChart";

export default function Home() {
  return (
      <>
        <div >
          
          <Navbar/>
          <HomeSectionOne/>
          <div className="mb-[9rem] pt-5 px-[1rem] lg:pl-40 bg-neutral-50 w-full "><BarChart/></div>
          <Transaction/>
        </div>
      </>
  );
}
