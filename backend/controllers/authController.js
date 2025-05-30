const user = require('../models/userModel')
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
        const existingEmail = user.findOne({emai:email})
        if(existingEmail){
            return next()
        }
        await user.create({
            username:username,
            email:email,
            customerId:customerId,
            password: password,
            subscription: subscription

        })
    }catch(error){
        console.log(error.messsage)
        next(error)
    }

}

exports.loginController = async () => {};

exports.logoutController = async () => {};
