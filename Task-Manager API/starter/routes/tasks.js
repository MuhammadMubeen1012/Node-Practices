//importing and initializing express
const express = require('express')
const { getTask, getTaskByID, createTask, deleteTask, updateTask } = require('../controller/tasks')
//setting Router 
const router = express.Router()

// routes 
// routes can be chained like get().post() is the routes are same 
router.route('/').get(getTask)

router.route('/:id').get(getTaskByID)

router.route('/').post(createTask)

router.route('/:id').patch(updateTask)

router.route('/:id').delete(deleteTask)

module.exports = router


