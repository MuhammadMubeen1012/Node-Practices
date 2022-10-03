const p = new Promise(function(res,rej){
    // put async work 
    // in case of success call res() for returning success value else call rej(new Error('Message') for error value )
    setTimeout(()=>{
        // res(1) // getting 1 as res
        rej(new Error('Error'))
    },2000)
})

// consuming promise consumers 
p   
    .then(result => console.log('Result', result))
    .catch(err => console.log('Error' , error))