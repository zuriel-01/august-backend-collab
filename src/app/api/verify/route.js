import dbConnect from "@/connect/dbConnect"
import userModel from "@/models/user"
import { NextResponse } from "next/server"

export const POST= async (req)=>{
    try{

        // take incoming values
        let {email,userOtp}=await req.json()
        userOtp=Number(userOtp)

        
        // call database connection
        await dbConnect()
        // find user in the datase that wants to verify otp
        const user=await userModel.findOne({email:email})
        // if no user is found
        if(!user){
            return new NextResponse(JSON.stringify({msg:"user not found"}), {status:404})

        }
        // if a user is found, then
        // check if otp has expired
        if(Date.now()>user.otpExpires){
            return new NextResponse(JSON.stringify({msg:"otp expired"}), {status:401})

        }

        // comapre user otp with the one stored in the database
        if(userOtp===user.otp){
            user.emailVerified=true
            await user.save()
           
            return new NextResponse(JSON.stringify({msg:"otp verified"}), {status:200})
        }
        else{
            return new NextResponse(JSON.stringify({msg:"Incorrect Otp"}), {status:400})

        }
       
     
        
    }
    catch(e){
        console.log(e.message)
        return new NextResponse(JSON.stringify({error:"server Error"}), {status:500})

    }
}