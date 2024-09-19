import dbConnect from "@/connect/dbConnect"

export const POST=async (req)=>{
    // accept incoming data
    const {email,username,password,contact}=await req.json()

    // call database connection
    await dbConnect()

    // store in database
    

}