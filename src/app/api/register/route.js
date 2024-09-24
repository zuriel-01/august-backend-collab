import dbConnect from "@/connect/dbConnect"
import userModel from "@/models/user"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import nodemailer from "nodemailer"

export const POST = async (req) => {

    try {

        // generatey account number function
        const generateAccount = () => {
            let acct = "2" + Math.ceil(Math.random() * 10000000000)
            return acct = Number(acct)
        }

        //  a functionn to generate otp
        const generateOtp = () => {
            let otp = Math.ceil(Math.random() * 10001)
            return otp
        }

        // function to send user otp
        // send email function
        function sendOTPByEmail(email, otp) {
            try {

                // Create a nodemailer transporter with your email service settings
                const transporter = nodemailer.createTransport({
                    service: 'gmail', // Use the email service you prefer
                    port: 587,
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
            catch (error) {
                console.log(error)
            }
        }

        // accept incoming data
        const { email, username, password, contact } = await req.json()

        // call database connection
        await dbConnect()

        // store in database
        // check if user is already registered 
        const userExists = await userModel.findOne({ email: email })

        if (userExists) {
            return new NextResponse(JSON.stringify({ msg: "user already exists" }), { status: 400 })
        }


        else {
            // send user otp

            // save new user to the database
            const accountNumber = generateAccount()
            const otp = generateOtp()
            // email otp expiration(10 mins)
            const emailOtpExpires = Date.now() + 312500;

            // now, before storing the user in the databsee, we need to hash our password
            // generate a salt for another layer of security
            const salt = bcrypt.genSaltSync(16)
            const hashedPassword = bcrypt.hashSync(password, salt)
            const newUser = new userModel({
                email: email, username: username,
                contact: contact, accountNumber: accountNumber,
                otp: otp,
                otpExpires: emailOtpExpires,
                password: hashedPassword
            })
            // if user is saved successfully
            if (newUser) {
                // send user otp
                sendOTPByEmail(email, otp)
                return new NextResponse(JSON.stringify({ msg: "user registered successfully" }), { status: 200 })
            }


        }
    }

    catch (e) {
        console.log(e.message)
        return new NextResponse(JSON.stringify({ message: `server Error` }), { status: 500 })
    }

}