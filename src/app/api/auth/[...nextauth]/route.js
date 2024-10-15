import dbConnect from "@/connect/dbConnect"
import userModel from "@/models/user"
import bcrypt from "bcryptjs"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authOptions = {
    // configure one or more authenticatuon providers
    providers: [
        Credentials({
            name: "credentials",
            id: "credentials",

            // we need to authorize our credentials, that is- check if the i=submitted 
            // user credentials matches the one stored in the database
            async authorize(credentials) {
                try {
                    // rememeber to take email that will be sent by the /login page 
                    const { email, password } = credentials
                    console.log("this is the email:", email, password)

                    // call databse connection
                    await dbConnect()
                    // check if the email user sent matches any in the databse
                    const user = await userModel.findOne({ email: email })
                    if (!user) {
                        throw new Error("invalid credentials")

                    }  // else a user is found
                    // compare user password to the hashed one stored in the databse
                    const passwordTrue = bcrypt.compareSync(password, user.password)
                    if (passwordTrue) {
                        // once you return an object in your authorize
                        // function it sees it that you are done with your conditon and exists
                        return user

                    }
                    else {
                        throw new Error("Invalid credentials")
                    }





                }
                catch (err) {
                    console.log(err.message)
                    throw new Error("server error")
                }

            }
        })
    ],
    // set error pages
    pages:{
        error:"/login"

    }

}

// create your handlers 
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }


