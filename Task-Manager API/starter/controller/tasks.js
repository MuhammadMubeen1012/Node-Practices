const Task = require('../models/Task')

// This modules deals with logic part 
const getTask = async (req,res)=>{
    try{
        //find({}) is used to get all tasks as object is empty to filter out
        const tasks = await Task.find({})
        res.status(200).json({tasks: tasks})
    }catch(error){
        res.status(500).json({msg: error})
    } 
}

const getTaskByID = async (req,res)=>{
    try{
        const {id: taskID} = req.params 
        const task = await Task.findOne({_id: taskID })
        res.status(200).json({task})
        
        //what if there is no task
        if(!task){
            return res.status(404).json({msg: `No task found with this ID ${taskID}`})
        }
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const createTask = async (req,res)=>{
    try{
        //Task is an model and create is an function provided by Model in moongoose library for MongoDB 
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }
    catch(error){
        res.status(500).json({msg: error})
    }
}

const deleteTask = async (req,res)=>{
    try{
        const {id:taskID} = req.params
        const deletedTask = await Task.findOneAndDelete({_id: taskID})
        res.status(200).json({deletedTask})

        //what if there is no task
        if(!deletedTask){
            return res.status(404).json({msg: `No task found with this ID ${taskID}`})
        }
        
    } catch(error){
        res.status(500).json({msg: error})
    }
}

const updateTask = async (req,res)=>{
    try{
        const {id:taskID} = req.params
        //1st param is for matching the object, 2nd is for data to update, 3rd is for option (validators and new returns, while update)
        const updatedTask = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new: true, 
            runValidators: true
        })
        res.status(200).json({_id: taskID, data:req.body})

        //what if there is no task
        if(!updatedTask){
            return res.status(404).json({msg: `No task found with this ID ${taskID}`})
        }
    }catch(error){
        res.status(500).json({msg: error})   
    }
}

module.exports = {
    getTask, getTaskByID, createTask, deleteTask, updateTask
}

