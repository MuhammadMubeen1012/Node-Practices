class CustomError extends Error{
    constructor(message,StatusCode){
        super(message)
        this.statusCode = StatusCode
    }
}

const createCustomError = (message,statusCode) =>{
    return new CustomError(message,statusCode)
}

module.exports = {createCustomError , CustomError}