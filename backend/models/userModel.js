const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const cookie = require('cookie')


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

// Sign token

userSchema.methods.getSignedToken = function(res){
    const accessToken = JWT.sign({id:this._id}, process.env.JWT_SECRET,{expiresIn:process.env.JWT_ACCESS_EXPIRE})

    const refreshToken = JWT.sign(
      { id: this._id },
      process.env.JWT_REFRESH_TOKEN,
      { expiresIn: JWT_REFRESH_EXPIRE }
    );

    res.cookie(`refreshToken`,`${refreshToken}`, {maxAge:86400*7000, httpOnly:true})
}



const User = mongoose.model("User", userSchema)

module.exports = User