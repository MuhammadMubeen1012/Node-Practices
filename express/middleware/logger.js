function log(req,res,next){
    // next is used to linked this middleware to another in a pipeline
    console.log("Logging...")
    // passing to the next middleware in the pipeline to proceed the request response cycle smoothly. 
    next();
}

module.exports = log; 