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

exports.registerController = async () =>{
    try{
        const { username, email, password, subscription, customerId } = req.body;
        const existingEmail = User.findOne({emai:email})
        if(existingEmail){
            return next(new errorResponse("Email is already registered", 500))
        }
        await user.create({
            username:username,
            email:email,
            customerId:customerId,
            password: password,

        })
        sendToken(user,201,res)
    }catch(error){
        console.log(error.messsage)
        next(error)
    }

}

//Login
exports.loginController = async () => {
    try{
        const {email,password} = req.body

        if(!email || !password){
            return next(new errorResponse("Please provide both email and password" ))
        }
        const user = await User.findOne({ email: email });
        if(!user){
            return next(new errorResponse(""))
        }

        const isMatch = await User.matchPassword(password)
        if(!isMatch){
            return next( new errorResponse('Invalid Credientials'))
        }
        sendToken(user,200,res)



    }catch(error){
        next(error.message)
    }
};

// Logout
exports.logoutController = async () => {
    res.clearCookie('refreshToken')
    return res.status(200).json({
        success: true,
        message: "Logged out successfully"
    })
};
