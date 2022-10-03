console.log('Before timeout') //1

// getUser(1)
//     .then(user => getRepositories(user.username))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log(commits))
//     .catch(err => console.log('Error', err.message))

async function displayCommits(){
    try{
        const user = await getUser(1)
        const repo = await getRepositories(user.username)
        const commits = await getCommits(repo[0])
        console.log(commits)
    } catch(err){
        console.log("Error" , err.message)
    }
}
displayCommits();

console.log('After timeout') //2 

function getUser(id){
    return new Promise((res,rej)=>{
        // async work 
        setTimeout(()=>{
            console.log('During Get User') //3 
            // res({id:id, username: 'muhammadmubeen1012'}) 
            rej(new Error('Couldnt get result'))
        },2000)
    })
    
}

function getRepositories(username){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('During Get Repositories')
            res(['repo1','repo2','repo3'])
        },2000)
    })
}

function getCommits(repo){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('During Get Commits')
            res(['com1','com2','com3'])
        },2000)
    })
}

/*

getUser(1,getRepository)
console.log(user) // undefined becuase at this time function wont return user

function getRepository(user){
    console.log("Get User")
    getRepositories(user.username , getCommit)
}

function getCommit(reposositories){
    console.log("Get Repositories")
    getCommits(reposositories, displayCommits)
}

function displayCommits(commits){
    console.log('Get commits')
    console.log(commits)
}
*/


