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

exports.loginController = async () => {
    try{
        const {email,password} = req.body
        const user = await User.findOne({email:email})
        if(!email || !password){
            return next(new errorResponse("Please provide both email and password" ))
        }

    }catch(error){
        next(error.message)
    }
};

exports.logoutController = async () => {};
