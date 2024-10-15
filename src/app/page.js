
'use client'



import Navbar from "./components/Navbar";
import HomeSectionOne from "./components/HomeSections/HomeSectionOne";
import Transaction from "./components/Transaction";
import BarChart from "./components/HomeSections/BarChart";
import Target from "./components/Target";
import { useRouter } from "next/navigation";
import Otp from "./components/Otp";
// import { useSession } from "next-auth/react"

export default function Home() {
  // const session=useSession()
  const router=useRouter()
  const status=false
  // console.log("this is the sessions-", session)
  
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


