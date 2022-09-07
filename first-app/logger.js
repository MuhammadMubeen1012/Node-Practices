// Module has exports property which holds object of data added to it for outside accessible
const EventEmitter = require('events'); // class
// const emitter = new EventEmitter(); // object
// this EventEmiiter is no longer used as we have extended a this in class logger
    
let URL = "https://any.com"

class Logger extends EventEmitter{ // class name is in pascal case 
    // extending EventEmitter becuase of making this class for raising and handling events
    get(message){
        console.log("Message: "+message)
        this.emit('messageLogged' , {id: 1 , URL: 'https:// '})
    }
    // in class we dont refer function with keyword function, and we called it a method    
}    
module.exports = Logger;
// module.exports.URL = URL; as implementation details         
