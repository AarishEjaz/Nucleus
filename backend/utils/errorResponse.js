class errorResponse extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

// const errorResponse = async(err, statusCode) =>{
//     res.json({message:err.message, statusCode})
// }

// class errorResponse {
//   constructor(message, statusCode) {
//     this.message = message;
//     this.statusCode = statusCode;
//   }
// }