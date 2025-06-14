// const User = require('../models/userModel')
// const errorResponse = require('../utils/errorResponse')
// sendToken = async(user,statusCode, res) =>{
//     const token = user.getSignedToken(res)
//     res.status(statusCode).json({
//         success: true,
//         token

//     })
// }

// // exports.registerController = async (req,res,next) =>{
// //     try{
// //         const { username, email, password, subscription, customerId } = req.body;
// //         const existingEmail = await User.findOne({email:email})
// //         if(existingEmail){
// //             return next(new errorResponse("Email is already registered", 500))
// //         }
// //         const user =  await User.create({
// //             username:username,
// //             email:email,
// //             customerId:customerId,
// //             password: password,

// //         })
// //         sendToken(user,201,res)
// //     }catch(error){
// //         console.error(error.messsage)
// //         next(error)
// //     }

// // }

// //Login
// loginController = async (req,res,next) => {
//     try{
//         const {email,password} = req.body

//         if(!email || !password){
//             return next(new errorResponse("Please provide both email and password" ))
//         }
//         const user = await User.findOne({ email: email });
//         if(!user){
//             return next(new errorResponse(""))
//         }

//         const isMatch = await user.matchPassword(password)
//         if(!isMatch){
//             return next( new errorResponse('Invalid Credientials'))
//         }
//         sendToken(user,200,res)



//     }catch(error){
//         next(error.message)
//     }
// };

// // Logout
// logoutController = async (req,res,next) => {
//     res.clearCookie('refreshToken')
//     return res.status(200).json({
//         success: true,
//         message: "Logged out successfully"
//     })
// };

// const registerController = async(req,res,next) =>{
//     try{
//         const {username, email,password} = req.body
//         const existingEmail = User.findOne({email:email})
//         if(existingEmail){
//             return res.sendStatus(403).json({message:"user already exist"})
//         }

//         const user = await User.create({
//             username,
//             email,
//             password

//         })
//         sendToken(user,200,res)

//     }catch(error){
//         return res.json({
//             message:error.message
//         })
//     }
// }


// module.exports = {registerController, loginController, logoutController}


const { STATUS_CODES } = require('http')
const User = require('../models/userModel')
const errorResponse = require('../utils/errorResponse')


const sendToken = async(user,statusCode,res) =>{
    const token = user.getSignedToken(res)
    res.status(statusCode).json({success:true,message:token})
}

const registerController = async(req,res,next) =>{
    try{
        const {username, password, email} =  req.body
        const existingEmail = await User.findOne({email:email})
        if(existingEmail){
            return next(new errorResponse("Email is already registered", 500))
            // return res.status(403).json({message:"already exists"})
        }

        const user = await User.create({
            username,
            email,
            password
        })
        sendToken(user, 200, res);


    }catch(error){
        res.sendStatus(500).json({
            message:"catch block invoked"
        })
    }
}

const loginController = async(req,res,next) =>{
    try{
        const {email, password} = req.body
        if(!email||!password){
            return next(new errorResponse("please provide both the fields", 401))
        }
        const user = await User.findOne({email:email})
        if(!user){
            return next(new errorResponse("user does not exist", 404))
        }
        const isMatch = await user.matchPassword(password)


        if(!isMatch){
            return next(new errorResponse("wrong password", 401))
        }
        sendToken(user,200,res)
    }catch(error){
        next(error.message)
    }
}

const logoutController = async(req,res,next)=>{
  res.clearCookie("refreshToken");
      return res.status(200).json({
          success: true,
          message: "Logged out successfully"
      })
}

module.exports = {sendToken, registerController, loginController, logoutController}