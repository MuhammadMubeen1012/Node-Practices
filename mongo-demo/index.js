const mongoose = require('mongoose')

// connection for local environment, for production environment the connection string will be different 
// playground is the name of database. In case it is not there mongodb create it for us
// it returns promise 
mongoose.connect('mongodb://localhost/playground')
    .then(()=> console.log('Connected to MongoDB'))
    .catch(error => console.error('Could not connect to MongoDB' , error))

const courseSchema = new mongoose.Schema({
    name: {type: String, required:true}, 
    auther: String, 
    tags: {
        type: Array, 
        validate: {
            isAsync: true,
            validator: function(value){
                setTimeout(() => {
                    const isValid = value.length > 0
                    // console.log(isValid)
                    // try{
                    //     Promise.resolve(isValid)
                    // }
                    // catch(err){Promise.reject(isValid)}
                    Promise.resolve(isValid)
                }, 3000);
                
            }, 
            message: "At least on tag is required"
        }
    }, 
    date: {type: Date, default: Date.now}, 
    isPublished: Boolean,
    price: {
        type: Number, 
        required: function(){
            // if course is published then price is required. 
            // we can't use arrow function becuase arrow function dont have their own this, becuase of execution context. 
            // it is referenced for that caller, who calls this arrow function. 
            return this.isPublished
        }
    }
})

// Course is an collection, a singular name. 
// Second argument is an schema that shape the document in the collection
const Course = mongoose.model('Course' , courseSchema)

async function createCourse(){
    const course = new Course({
        name: '', 
        auther: 'Mosh', 
        tags: [], 
        isPublished: false, 
        price: 'ABC'
    })
    
    try{
        await course.validate()
        // const result = await course.save();
        // console.log(result)
    } catch(error){
        // console.log('Error' , error.message)
        // as we have different errors in validating properties then we can trace all those. 
        for(er in error.errors){
            console.log(error.errors[er].message)
        }
    }
    // course.save() return promise therefore we to put await for waiting and callbakc once ready. 
    // Here MongoDB assign unique identifier to it.     
}

async function getCourses(){
    // we can add parameters to find method. We can pass object for filtering 
    const courses = await Course
        // .find({auther:'Mosh', price: {$gt: 10 , $lt: 20}})
        .find({auther:/^Mubeen/})
        // .and([{name:'NodeJS'},{isPublished:false}])
        .limit(10)
        .sort({name:1})
        .select({name:1,tags:1,auther:1})
        .count()
    // sort takes object and key-value pair. 1 for ascending and -1 for descending
    // this returns promise therefore we put await and store the result in courses. 
    console.log(courses)
}

async function updateCourse(id){
    // approaches 
        
    // query first > findByID > update properties > save 
    // updated directly to the DB. 

    // update({filterObject} , {properties to be updated})
    // it returns the updated result directly 
    const result = await Course.updateOne({_id: id},{
        $set: {
            isPublished: true, 
            auther: 'Engineer Mubeen'
        }
    })

    console.log(result)
    /*
    // return promise. 
    const course = await Course.findById(id)
    // in case no course found on the given ID
    if(!course) return

    // set multiple properties or can access properties and set individually
    course.set({
        isPublished: false, 
        auther: 'Mubeen'
    })

    //after updating save it 
    const result = await course.save()
    console.log(result)
    */
}

// updateCourse('632ae5ab1e5c4e93bd5297a7');
// updateCourse('632ae74c48b5807debb5e48b')

async function removeDoc(id){
    const result = await Course.remove({_id: id})
    console.log(result)
}

// removeDoc('632ae74c48b5807debb5e48b')
createCourse()