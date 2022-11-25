const {CustomError} = require('../error/custom-error')

const errorHandlerMW = (err,req,res,next) =>{
    if(err instanceof CustomError){
        return res.status(err.status).json({error:err.message})    
    }
    return res.status(500).json({error:"Something went Wrong, try again"})
}

module.exports = errorHandlerMW