const Task = require('../models/Task')

// This modules deals with logic part 
const getTask = (req,res)=>{
    res.send('All Task ... ')
}

const getTaskByID = (req,res)=>{
    res.json({id: req.params.id})
}

const createTask = async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const deleteTask = (req,res)=>{
    res.send('Task deleted ... ')
}

const updateTask = (req,res)=>{
    res.send('Task updated ... ')
}

module.exports = {
    getTask, getTaskByID, createTask, deleteTask, updateTask
}

