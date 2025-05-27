const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const { string } = require("i/lib/util")


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, 'username is required']
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique: true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minlength:[6, 'Password length should be 6 character long']
    },
    customerId:{
        type:String,
        default:""
    },
    subscription:{
        type:String,
        default:""
    }

})

// Hash password
userSchema.pre('save', async function(next){
    if(!this.isModified("password")){
        return next
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password,salt)
    next()
})

// Check password

userSchema.method.matchPassword = async function (password){
    return await bcrypt.compare(password, this.password)
}



const User = mongoose.model("User", userSchema)

module.exports = User