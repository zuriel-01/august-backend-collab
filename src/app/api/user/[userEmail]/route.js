import dbConnect from "@/connect/dbConnect";
import userModel from "@/models/user";
import { NextResponse } from "next/server"

export const GET=async (req,{params})=>{

    try{
        // make a reqeust to the database
        const email=params.userEmail;
        // call databse connection
        await dbConnect()
        // get all user details
    
        const userDetails=await userModel.findOne({email})
    
       return new NextResponse(JSON.stringify({balance:userDetails.balance,
        username:userDetails.username
       }), {status:200})

    }
    catch(err){
        console.log(err.message)
       return new NextResponse(JSON.stringify({msg:"server Error"}), {status:500})

    }
}