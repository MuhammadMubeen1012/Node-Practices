const express = require('express')
const router = express()

// it takes two parameters, one is root of server, another is callback function
router.get('/', (req,res) =>{
    //this callback function is route handler
    res.render('index',{
      title: "My First Express App" , 
      message: "Hello! to the backend service"
    })
})

module.exports = router;
