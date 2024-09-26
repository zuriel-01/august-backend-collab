import dbConnect from "@/connect/dbConnect"
import userModel from "@/models/user"
import bcrypt from "bcryptjs"
import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export const POST = async (req) => {

    // generate otp
    function generateOtp(){
        const otp=Math.ceil(Math.random()*10000)
        return otp
    }
    // generate accountNumber
    function generateAccountnumber(){
        const accountNumber=Math.ceil(Math.random()*100000001012)
        return accountNumber
    }


    // Function to send OTP via email using nodemailer
function sendOTPByEmail(email, otp) {
    try{
      
      // Create a nodemailer transporter with your email service settings
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Use the email service you prefer
        port: 465,
        auth: {
          user: process.env.EMAIL_ADDRESS,  
          pass: process.env.EMAIL_APP_PASSWORD, 
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false,
        },
      });
       
      // Email content
      const mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        // recipeint
        to: email,
        subject: 'Verification Code for Registration',
        text: `Your OTP (One-Time Password) for registration is: ${otp}`,
      };
    
      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
    }
    catch(error){
      console.log(error.message)
    }
  }
    
    
    // take user incoming data
    const {username,email,contact,password}=await req.json()
    try{
        
        // call database connection
        await dbConnect()
        // hash user password and add salt to add another layer of security
        const salt= bcrypt.genSaltSync(16)
        const hashPassword= bcrypt.hashSync(password,salt)
        
        //    store user data in the database
        const otp=generateOtp()
        const accountNumber=generateAccountnumber()
        // otp expres after 5 minutes
        const otpExpires= Date.now()+312500

        const newUser=new userModel({username:username, email:email,
            contact:contact, password:hashPassword, accountNumber,otp,
            otpExpires
        })

        await newUser.save()
        if(newUser){
            // send user otp mail
            sendOTPByEmail(email,otp)
            return new NextResponse(JSON.stringify({msg:"user regsitered successfullly"}) , {status:200})

        }
    }
    catch(e){
        console.log(e.message)
        return new NextResponse(JSON.stringify({mmsg:"server Error"}), {status:500})
        
    }
   
}