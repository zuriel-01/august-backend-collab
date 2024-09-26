"use client"


import Navbar from "./components/Navbar";
import HomeSectionOne from "./components/HomeSections/HomeSectionOne";
import Transaction from "./components/Transaction";
import BarChart from "./components/HomeSections/BarChart";
import Target from "./components/Target";
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter()
  const status=false

     return (
      <>
        <div className="">
          <Navbar/>
          <HomeSectionOne/> 
          <BarChart/>
          <Target/>
          <Transaction/>
        </div>
      </>
  );
  
}
