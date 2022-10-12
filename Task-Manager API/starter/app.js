//importing and initializing express
const express = require('express')
const app = express();

app.get('/Home' , (req,res)=>{
    res.send('Task Manager App')
})

//declaring and initializing PORT 
const PORT = 3000

//making this app to listen request 
app.listen(PORT,console.log(`Server is connected on port ${PORT}`))

