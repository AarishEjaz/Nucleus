const { error } = require('console')
const User = require('../models/userModel')
const errorResponse = require('../utils/errorResponse')
exports.sendToken = async(user,statusCode, res) =>{
    const token = user.getSignedToken(res)
    res.status(statusCode).json({
        success: true,
        token,
    })
}

exports.registerController = async (req,res,next) =>{
    try{
        const { username, email, password, subscription, customerId } = req.body;
        const existingEmail = await User.findOne({email:email})
        if(existingEmail){
            return next(new errorResponse("Email is already registered", 500))
        }
        const user =  await User.create({
            username:username,
            email:email,
            customerId:customerId,
            password: password,

        })
        this.sendToken(user,201,res)
    }catch(error){
        console.error(error.messsage)
        next(error)
    }

}

//Login
exports.loginController = async (req,res,next) => {
    try{
        const {email,password} = req.body

        if(!email || !password){
            return next(new errorResponse("Please provide both email and password" ))
        }
        const user = await User.findOne({ email: email });
        if(!user){
            return next(new errorResponse(""))
        }

        const isMatch = await user.matchPassword(password)
        if(!isMatch){
            return next( new errorResponse('Invalid Credientials'))
        }
        this.sendToken(user,200,res)



    }catch(error){
        next(error.message)
    }
};

// Logout
exports.logoutController = async (req,res,next) => {
    res.clearCookie('refreshToken')
    return res.status(200).json({
        success: true,
        message: "Logged out successfully"
    })
};
