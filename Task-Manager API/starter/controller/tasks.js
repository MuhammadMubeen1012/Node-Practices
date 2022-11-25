const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
//in curly, becuase of function returns object
const {createCustomError} = require('../error/custom-error')

// This modules deals with logic part
const getTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res
    .status(200)
    .json({ status: "Success", data: { tasks, nbHits: tasks.length } });
  /*  
  try {
    //find({}) is used to get all tasks as object is empty to filter out
    const tasks = await Task.find({});
    //Ways of sending responses to the client
    //res.status(200).json({tasks: tasks})
    //res.status(200).json({tasks: tasks , amount:tasks.length})
    //res.status(200).json({success:true , data: {tasks,nbHits: tasks.length}})
    res
      .status(200)
      .json({ status: "Success", data: { tasks, nbHits: tasks.length } });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  */
});

const getTaskByID = asyncWrapper(async (req, res,next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  res.status(200).json({ task });

  //what if there is no task
  if (!task) {
    return next(createCustomError(`No task found with this ID ${taskID}`,404))
    /*
    return res
      .status(404)
      .json({ msg: `No task found with this ID ${taskID}` });
    */
    /*
        try {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        res.status(200).json({ task });
    
        //what if there is no task
        if (!task) {
          return res
            .status(404)
            .json({ msg: `No task found with this ID ${taskID}` });
        }
      } catch (error) {
        res.status(500).json({ msg: error });
      }
      */
  }
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
  /*
        try {
          //Task is an model and create is an function provided by Model in moongoose library for MongoDB
          const task = await Task.create(req.body);
          res.status(201).json({ task });
        } catch (error) {
          res.status(500).json({ msg: error });
        }
        */
});

const deleteTask = asyncWrapper(
    async (req, res) => {
        const { id: taskID } = req.params;
          const deletedTask = await Task.findOneAndDelete({ _id: taskID });
          res.status(200).json({ deletedTask });
      
          //what if there is no task
          if (!deletedTask) {
            return next(createCustomError(`No task found with this ID ${taskID}`,404))
            /*
            return res
              .status(404)
              .json({ msg: `No task found with this ID ${taskID}` });
            */
          }
        /*
        try {
          const { id: taskID } = req.params;
          const deletedTask = await Task.findOneAndDelete({ _id: taskID });
          res.status(200).json({ deletedTask });
      
          //what if there is no task
          if (!deletedTask) {
            return res
              .status(404)
              .json({ msg: `No task found with this ID ${taskID}` });
          }
        } catch (error) {
          res.status(500).json({ msg: error });
        }
        */
      }
)

const updateTask = asyncWrapper(
    async (req, res) => {
        const { id: taskID } = req.params;
        //1st param is for matching the object, 2nd is for data to update, 3rd is for option (validators and new returns, while update)
        const updatedTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({ _id: taskID, data: req.body });
    
        //what if there is no task
        if (!updatedTask) {
            return next(createCustomError(`No task found with this ID ${taskID}`,404))
            /*
            return res
            .status(404)
            .json({ msg: `No task found with this ID ${taskID}` });
        */
        }
        /*
        try {
          const { id: taskID } = req.params;
          //1st param is for matching the object, 2nd is for data to update, 3rd is for option (validators and new returns, while update)
          const updatedTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
          });
          res.status(200).json({ _id: taskID, data: req.body });
      
          //what if there is no task
          if (!updatedTask) {
            return res
              .status(404)
              .json({ msg: `No task found with this ID ${taskID}` });
          }
        } catch (error) {
          res.status(500).json({ msg: error });
        }
        */
      }
)

module.exports = {
  getTask,
  getTaskByID,
  createTask,
  deleteTask,
  updateTask,
};
