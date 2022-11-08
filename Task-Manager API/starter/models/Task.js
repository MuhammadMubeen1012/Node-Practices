const mongoose = require('mongoose')

//setting the structure for our documents 
const TaskSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true,"Name is required ..."], 
        trim: true, 
        maxlength: [20, 'Name can not be more than 20 characters ...']
    }, 
    completed: Boolean 
})

//export model, so we can use it in the controller 
module.exports = mongoose.model('Task' , TaskSchema)
// lets go to the controller for logic part 
