'use client'
import Navbar from "./components/Navbar";
import HomeSectionOne from "./components/HomeSections/HomeSectionOne";
import Transaction from "./components/Transaction";
import BarChart from "./components/HomeSections/BarChart";
import Target from "./components/Target";

export default function Home() {
  return (
      <>
        <div >
          
          <Navbar/>
          <HomeSectionOne/> 
          <Target/>
          <Transaction/>
        </div>
      </>
  );
}
