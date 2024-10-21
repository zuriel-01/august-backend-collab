
'use client'



import Navbar from "./components/Navbar";
import HomeSectionOne from "./components/HomeSections/HomeSectionOne";
import Transaction from "./components/Transaction";
import BarChart from "./components/HomeSections/BarChart";
import Target from "./components/Target";
import { useRouter } from "next/navigation";
import Otp from "./components/Otp";
import { useSession } from "next-auth/react"
import Loading from "./loading";


export default function Home() {

  const session = useSession()
  const router = useRouter()

  console.log("this is the sessions-", session)

  if(session.status=="loading"){
    return (
      <Loading/>
    )
  }
  // protect the home page rout is use is not logged in
  if (session.status == "unauthenticated") {
    
    return router.replace('/login')
  }

  

  else {
    return (
      <>
        <div className="">
          <Navbar />
          <HomeSectionOne />
          <BarChart />
          <Target />
          <Transaction />


        </div>
      </>
    );
  }





}


