const { default: mongoose, trusted } = require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true

    },

    email:{
        type:String,
        required:true,

    },

    contact:{
        type:Number,
        required:true
    },

    password:{
        type:String,
        required:true
    }
    ,accountNumber:{
        type:Number,
        unique:true,

    },
    balance:{
        default:0,
        type:Number
    },
    otp:{
        type:Number,
        max:4
    },
    emailVerified:{
        default:false,
        type:Boolean
    },
    otpExpires:{
        type:Number
    },
    
    // timestamsps:true-> provides the date of creation and date the record 
    // is updated
}, {timestamps:true})

const userModel= mongoose.models.user || mongoose.model('user', userSchema)
export default userModel