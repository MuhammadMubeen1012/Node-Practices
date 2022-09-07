// // We want to use data available in logger.js for that we have to load module
// // store the results in const, a best practice becuase we dont wanna change it.
// const log = require('./logger')
// // return object that is exported from that module. 
// console.log(log)
// // get property with value a get function. 
// log.get("Hello to the world of backend development")

// const path = require('path')
// // node first check builtin module for that arguement, else existence one
// let pathObj = path.parse(__filename)
// // __filename is from module wrapper function parameter. 
// // pathObj contains an object of that path 
// console.log(pathObj) 

// const os = require('os')

// let totalMemory = os.totalmem();
// let freeMemory = os.freemem();

// console.log(`Total Memory is ${totalMemory/1024/1024}`)
// console.log(`Free Memory is ${freeMemory/1024/1024}`)
// // we cant get information from JS as it is runs only in browser, 
// // but node has modules and runs outside the browser.

//const fileSystem = require('fs')
// let files = fileSystem.readdirSync('./')
// // it returns an array of string containing files name in the current directory. 
// console.log(files)

// fileSystem.readdir('./' , function(err,res){
//     if(err){
//         console.log(`Error: ${err}`)
//     } else{
//         console.log(`Result: ${res}`)
//     }
// })

const EventEmitter = require('events'); // class
const { emit } = require('process');
// convention for naming class is first letter should also be capital to show the representation of class. 
// as this is class we have to create the instance of it which is loaded from module. 
// const emitter = new EventEmitter(); // object
// Add listner to listen the raised event 
// emitter.on or emitter.addListener are same 
// emitter.on('messageLogged' , function(arg){ // use e, arg, eventArg 
//     console.log("Listner called" , arg)
// });
// on(eventname, call back function when event is raised)
// emit is use for raising event but no listner, messageLogged is an event we raise that message occurs. 
// emitter.emit('messageLogged')

// What if we want to some more data when event is raised, for this pass an event arguement 
// emitter.emit('messageLogged' , {id: 1 , URL: 'https:// '})
// object contains data related to that event, for recieving that data use parameter in listners call back function

// logger.get('message')
// this will log the message only, raising wvent in that function wont called the listner to do something as these both are different object 
// Solution: Create a class logger, which has fucntion log

// const Logger = require('./logger')
// // this contain class as we export it 
// const loggerClass = new Logger();
// loggerClass.on('messageLogged' , function(arg){ // use e, arg, eventArg 
//     console.log("Listner called" , arg)
// });
// // loggerClass extended an eventEmitter so it can called event listner, and we can run a message
// loggerClass.get('message')

const http = require('http');
const { Socket } = require('dgram');
const { json } = require('stream/consumers');
const server = http.createServer((req,res) =>{
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4,5]))
        res.end()
    } else{
        res.write('Homepage')
        res.end()
    } 

});
// a server, which has capabilities of event emitter 

// registering an event for listening on building connection like 
// server.on('connection' , (socket) =>{
//     console.log('New connection established...')
// })

//raising event 
server.listen(3000)
// 3000 is an port number 

console.log('Server is listning from port 3000')