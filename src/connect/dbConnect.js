import mongoose from "mongoose";

export default  async function dbConnect(){
    try {
        // remember , all mongoose operation returns a promise
        const dbConnection=await  mongoose.connect(process.env.MONGO_URL)
      
            return dbConnection
        
    } catch (error) {
        console.log(error.message)
    }
}