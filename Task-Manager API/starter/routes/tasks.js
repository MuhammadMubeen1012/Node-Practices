//importing and initializing express
const express = require('express')
//setting Router 
const router = express.Router()

router.route('/').get((req,res)=>{
    res.send('All Tasks')
})


