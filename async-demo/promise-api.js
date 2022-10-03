const p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log('Promise01')
        res(1)
    },2000)
})

const p2 = new Promise((res)=>{
    setTimeout(()=>{
        console.log('Promise02')
        res(2)
    },2000)
})

// it return a new promise when all promises in the array are resolved.
// but both async operation runs at the same time with single thread 
// It has problem, if any of the promises rejected final result will be rejected 
Promise.race([p1,p2])
    .then(result=>console.log(result))
    .catch(err=>console.log('Error',err.message))

// in race as one async operation resolved the final result is calculated. 
// in this case the one is the result of 1st fulfilled promiseA