'use client'

import BarChart from "./components/HomeSections/BarChart";
import Navbar from "./components/Navbar";
import HomeSectionOne from "./components/HomeSections/HomeSectionOne";
import Target from "./components/Target";

export default function Home() {
  return (
      <>
        <div >
          
          <Navbar/>
          <HomeSectionOne/>
          <BarChart/>
          <Target/>
        </div>
      </>
  );
}
