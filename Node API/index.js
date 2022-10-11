import express from 'express'
// getting the incoming post request body
import bodyParser from 'body-parser'
//for using users router in the app
import userRoutes from './routes/users.js'


// initialize express application 
const app = express()
// initialize and declare the PORT number for our application
const PORT = 5000

// makes app to use bodyParser as JSON 
app.use(bodyParser.json())
//using user routes as /users for all routes 
app.use('/users',userRoutes)

// getting data from request 
app.get('/' , (req,res)=>{
    res.send("Homepage>")
})
//now makes application to listen incoming request 
app.listen(PORT,()=>{
    console.log(`Connected to Server: http:\\localhost:${PORT}`)
})

