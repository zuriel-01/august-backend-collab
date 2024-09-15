'use client'

import Image from "next/image";
import Navbar from "./components/Navbar";
import HomeSectionOne from "./components/HomeSections/HomeSectionOne";
import Targets from "./components/Targets/target";

export default function Home() {
  return (
      <>
        <div>
          <Navbar/>
          <HomeSectionOne/>
          <Targets/>
        </div>
      </>
  );
}
