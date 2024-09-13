'use client'

import Image from "next/image";
import Navbar from "./components/Navbar";
import HomeSectionOne from "./components/HomeSections/HomeSectionOne";
import Transaction from "./components/Transaction";

export default function Home() {
  return (
      <>
        <div>
          <Navbar/>
          <HomeSectionOne/>
          <Transaction/>
        </div>
      </>
  );
}
