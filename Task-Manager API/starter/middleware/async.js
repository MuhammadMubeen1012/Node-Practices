//A middle ware function that wrap our controllers as all are asynchronous process. 
//It helps in avoiding the repeated try-catch block. 
const asyncWrapper = (fun) =>{
    //as controller is async, so wrapper function should return async
    return async (res,req,next) =>{
        try {
            await fun(res,req,next)
        } catch (error) {
            //middle ware for handling error 
            next(error)
        }
    }
}

module.exports = asyncWrapper