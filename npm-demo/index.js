const _ = require('underscore')
// require function assumption 
// 1. it assume that it is an core module.
// 2. Then it assumes that it is file or folder  
// 3. If not find the file and folder it looks then it in node modules. 

// Underscore is an package or library provides utilities function

var result = _.contains([1,2,3],4)
console.log(result)
