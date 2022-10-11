import { v4 as uuidv4 } from 'uuid';
let users = []

export const createUser = (req,res)=>{
    // when we pass any data to server, it will be sent in the body, as req.body return that data to be posted
    const user = req.body
    
    // for posting data we can't use array, as everytime the server loaded it will be new array with two objects
    users.push({...user , id: uuidv4()})

    res.send(`User with name ${user.firstName} added to DB`)
}

export const getUser = (req,res)=>{
    res.send(users)
}

export const getUserByID = (req,res)=>{
    //req.params return an result as object. Then we can use that object to get data as per request 
    const id = req.params.id
    //object destructuring
    // const {id} = req.params 

    // if userID matches it return result 
    const foundUser = users.find(user => user.id == id)
    res.send(foundUser)
}

export const deleteUser = (req,res)=>{
    //req.params return an result as object. Then we can use that object to get data as per request 
    const id = req.params.id
    
    // on having false it removes that user and keep everything same and on true it keep that object and remove each
    // makes users let 
    users = users.filter(user=>user.id != id)

    res.send(`User with ID ${id} deleted successfully`)
}

export const updateUser = (req,res)=>{
    // id is for getting that object for update 
    const id = req.params.id
    // needs body of that object
    const {firstName,age} = req.body
    const usersForUpdate = users.find(user=>user.id == id)
    if(firstName) usersForUpdate.firstName = firstName   
    if(age) usersForUpdate.age = age   

    res.send(`User with id ${id} has been updated`)
    
}