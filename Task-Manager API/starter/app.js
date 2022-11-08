//importing and initializing express
const express = require('express')
const app = express();
//importing routes to use 
const tasks = require('./routes/tasks.js')
//executing db connection 
const connectDB = require('./DB/connect')
//dotenv is for saving private variables 
require('dotenv').config()

//using express.json() for parsing incoming request into JSON 
app.use(express.json())
//use and declare basic routes
app.use('/api/v1/tasks',tasks)

//Home Page 
app.get('/Home' , (req,res)=>{
    res.send('Task Manager App')
})

//declaring and initializing PORT 
const PORT = 3000

const start = async () => {
    try {
        //process is an global variable 
        await connectDB(process.env.MONGO_URI)
        //making this app to listen request 
        app.listen(PORT,console.log(`Server is connected on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()

