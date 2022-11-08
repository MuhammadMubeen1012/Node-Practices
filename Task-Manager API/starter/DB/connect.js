const mongoose = require('mongoose')

//help us to create database based on connection string
const connectToDB = (URL) => {
    return mongoose.connect(URL , {
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useFindAndModify: false, 
        useUnifiedTopology: true
    })
}

module.exports = connectToDB




