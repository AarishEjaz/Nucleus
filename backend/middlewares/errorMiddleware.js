const errorResponse = require('../utils/errorResponse')

const errorHandler = (err,req,res,next)=>{
    let error = {...err}
    error.message = err.message //isko comment kar ek check karo

    if(err.name ==="castError"){
        const message = "Resource Not Found"
        error = new errorResponse(message, 404)
    }

    if(err.code===11000){
        const message = "Duplicate field value entered"
        error = errorResponse(message, 400)
    }

    if(err.name === "validationError"){
        const message = Object.values(err.errors).map(val=>val.message)
        error= new errorResponse(message, 400)
        res.status(error.statusCode || 500).json({
            success:false,
            error:error.message || "Server Error"
        })
    }

    // next()
}

module.exports= errorHandler