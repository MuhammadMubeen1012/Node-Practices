const Joi = require('joi')
const express = require('express')
const app = express()

// Task get,update,create,delete a genre 
// endpoint - https://vidly.com/api/genres

// get request - all genres 
app.get('https:vidly.com/api/genres' , (req,res) => {
    res.send(genres)
})

// listening to the event 
const port = process.env.PORT || 3001 ;
app.listen(port,()=>{
    console.log(`Listening to the port ${port}`)
})

