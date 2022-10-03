// return classe, therefore writing Pascal class.
const Joi = require("joi");
const config = require('config')
const startUpDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')
const logger = require('./middleware/logger')
const authenticator = require('./authentication')
const helmet = require('helmet')
const morgan = require('morgan')
const express = require("express");
const courses = require('./routes/courses')
const home = require('./routes/home')
app.use('/api/courses',courses)
app.use('/',home)
// it return function
// we are calling express function to application, now app is an object.
const app = express();
// returns middle ware which we use for requesting process pipeline for enabling JSON data parsing from body of req. data.
app.use(express.json());
//custom middle ware function for logging 
app.use(logger)
//custom middle ware function for authenticating is installing
app.use(authenticator)
// builtin middleware express.
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(helmet())
// helemt module return function. 
// app.use(morgan('tiny'))
// environment features enabling or disabling, this for making current 
// environment either for testing/development/production

// setting view engine for an application 
app.set('view engine' , 'pug')
// for setting the location where we store templating engines for generating dynamic HTML
app.set('views' , './views')

console.log(`NODE_ENV is: ${process.env.NODE_ENV}`) // but it is undefined now 
console.log(`App: ${app.get('env')}`) // detect current environemnt by using process.env.NODE_ENV
// by default it is in development 

// Lets make morgan only for development environemnt 
if(app.get('env') == 'development'){
    app.use(morgan('tiny'))
    startUpDebugger("Morgan enabled ...")
}

// in case we want to debug db related debugging 
dbDebugger('Connnected to DB')

// seeing the configuration file. 
console.log(config.get('name'))
console.log(config.get('mail.host'))
console.log(config.get('mail.password'))

// lsitening on a given port
const port = process.env.PORT || 4002;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
// as on this machine we dont have environment variable therefore 3000 will be used.
// But we can set the environment variable too.
// set PORT=5000
